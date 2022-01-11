import React, { useState } from 'react';

import Search from '../search/Search';

const App = () => {
  const [search, setSearch] = useState('');

  console.log('<App />');

  const handleOnSearch = search => setSearch(search);

  return (
    <div className="remote-container">
      <div>Remote React Search APP</div>
      <Search onSearch={handleOnSearch} />
      <div>{search}</div>
    </div>
  );
}

export default App;
