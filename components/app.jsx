import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="container-fluid">
    <div className="home">
      <Header />
      <div className="main-home">
        <div className="left-bar"></div>
        <div className="maincontent-progress-main">
          { children }
        </div>
        <div className="right-bar"></div>
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
