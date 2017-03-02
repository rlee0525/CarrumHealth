import React from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img id="logo1" src="../../assets/images/logo.png" />
        <span>Welcome Wayne Enterprises Members</span>
        <img id="logo2" src="../../assets/images/wane_logo.jpg" />
        <FontAwesome className='fa-bars' size='2x' />
      </div>
    );
  }
}

export default Header;
