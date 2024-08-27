import React from 'react';
import logo from '/src/images/logo.png'; 
import backgroundImage from '/src/images/background.jpg';

const Header = ({siteTitle, description}) => {
  return (
    <header style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      color: 'white',
      padding: '20px'
    }}>
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='encabezados'>
        <h1>{siteTitle}</h1>
        <h2>{description}</h2>
      </div>
    </header>
  );
};

export default Header;