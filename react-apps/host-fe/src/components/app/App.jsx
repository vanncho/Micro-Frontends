import React, { lazy, Suspense } from 'react';

import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Search from 'remote/Search';
import Users from '../user/users/Users';

// const Search = lazy(() => import('./remote/Search'));

import { useLogic } from './hooks/useLogic';

import logo from '../../logo.svg';

const App = () => {
  const { filterUsers, handleOnSearch } = useLogic();

  console.log('<App />');

  return (
    <>
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="fake-header">{'{JSON} Placeholder'}</div>
      </div>
      <div className="app-container">
        <ErrorBoundary>
          <Search onSearch={handleOnSearch} />
        </ErrorBoundary>
        <Users users={filterUsers} />
      </div>
    </>
  );
}

export default App;
