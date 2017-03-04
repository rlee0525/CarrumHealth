import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Dashboard from './dashboard/dashboard';
import Task from './task/task';

const Root = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/task" component={Task} />
      </Route>
    </Router>
  );
};

export default Root;
