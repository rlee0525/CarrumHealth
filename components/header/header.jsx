import React from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img id="logo1" src="http://res.cloudinary.com/rlee0525/image/upload/v1488677836/logo_ovxzod.png" />
        <span>Welcome Wayne Enterprises Members</span>
        <img id="logo2" src="http://res.cloudinary.com/rlee0525/image/upload/v1488677836/wane_logo_vlhpu3.jpg" />
        <FontAwesome className='fa-bars' name='bars' size='2x' />
      </div>
    );
  }
}

export default Header;
