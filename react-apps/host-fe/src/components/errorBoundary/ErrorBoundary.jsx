import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('error', error);
    console.log('errorInfo', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{
          margin: '0 auto',
          border: '1px solid',
          width: '50%',
          marginBottom: '5px'
          }}
        >
          <p style={{ "textAlign": 'center', marginBottom: 0 }}>External resource is not available.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
