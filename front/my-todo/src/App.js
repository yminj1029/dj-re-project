import React from 'react';
import { Route } from 'react-router-dom';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <div>
      <Route component={JoinPage} path="/join"></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={TodoPage} path="/todo"></Route>
    </div>
  );
};

export default App;
