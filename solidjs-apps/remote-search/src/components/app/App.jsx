import { createSignal } from 'solid-js';

import Search from '../search/Search';

function App() {
  const [search, setSearch] = createSignal('');

  console.log('<App />');

  const handleOnSearch = search => setSearch(search);

  return (
    <div className="remote-container">
      <div>Remote Solid Search APP</div>
      <Search onSearch={handleOnSearch} />
      <div>{search}</div>
    </div>
  );
}

export default App;
