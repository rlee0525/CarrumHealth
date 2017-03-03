import React from 'react';
import Header from './header/header';
import ProgressBar from './progress_bar/progress_bar';

const App = ({ children }) => (
  <div className="container-fluid">
    <div className="home">
      <Header />
      <div className="main-home">
        <div className="left-bar"></div>
        <div className="maincontent-placeholder">
          <ProgressBar />
          { children }
        </div>
        <div className="right-bar"></div>
      </div>
    </div>
  </div>
);

export default App;
