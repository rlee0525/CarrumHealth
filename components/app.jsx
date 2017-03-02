import React from 'react';
import Header from './header/header';

const App = ({ children }) => (
  <div className="home">
    <Header />
    <div className="main-home">
      <div className="left-bar"></div>
      <div className="maincontent-placeholder">
        { children }
      </div>
      <div className="right-bar"></div>
    </div>
  </div>
);

export default App;
