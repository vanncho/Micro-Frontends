const path = require('path');
// webpack needs to be explicitly required
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    contentBase: path.join(__dirname, 'public'), // tell the server where to serve content from
    historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
    port: 3001,
    open: true,
    hot: true, // allow modules to be updated while an application is running, without a full reload
    inline: true,
    compress: true, // enable compression everything
    watchContentBase: true, // tell dev-server to watch the files
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024000
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Search": "./src/components/search/Search.jsx",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
      },
    }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
    }),
  ],
};
