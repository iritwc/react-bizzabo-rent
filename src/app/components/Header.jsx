import React from 'react';

import './Header.style.css'

const Logo = ()=> (
  <img
    className="logo"
    alt="Bizzabo"
    src="https://s3.amazonaws.com/bizzabo-public-website/BizzaLogo_Gradient.jpg"
  />
);

const Header = (props) => {
  return (
    <div className='header'>
      <div className="logo-container">
        <Logo/>
      </div>
    </div>
  );

};

export default Header
