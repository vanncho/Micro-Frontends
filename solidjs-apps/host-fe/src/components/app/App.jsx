import Search from 'remote/Search';
import Users from '../user/Users';

import { appLogic } from './appLogic';

import logo from '../../logo.svg';

function App() {
  const { filterUsers, handleOnSearch } = appLogic();

  console.log('<App />');

  return (
    <>
      <div class="header">
        <img src={logo} class="logo" alt="logo" />
        <div class="fake-header">{'{JSON} Placeholder'}</div>
      </div>
      <div class="app-container">
        <Search onSearch={handleOnSearch} />
        <Users users={filterUsers}/>
      </div>
    </>
  );
}

export default App;
