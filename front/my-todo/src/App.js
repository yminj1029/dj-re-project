import React from 'react';
import { Route } from 'react-router-dom';
import Calendar from './pages/Calendar';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <div>
      <Route component={JoinPage} path="/join"></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={Calendar} path="/calendar"></Route>
      <Route component={TodoList} path="/todo"></Route>
    </div>
  );
};

export default App;
