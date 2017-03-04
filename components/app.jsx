import React from 'react';
import Header from './header/header';
import Dashboard from './dashboard/dashboard';

const App = ({ children }) => (
  <div className="container-fluid">
    <div className="home">
      <Header />
      <div className="main-home">
        <div className="left-bar"></div>
        <Dashboard />
        <div className="right-bar"></div>
      </div>
    </div>
  </div>
);

export default App;
