import React from 'react';
import logo from '/src/images/logotipo.png'; // Ajusta esta ruta
const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <h1>PATRIMONIO NACIONAL</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="#nosotros">Bienvenido a la presidencia</a></li>
          <li><a href="#mision">Conoce nuestra historia</a></li>
          <li><a href="#vision">nsejo de administración</a></li>
          <li><a href="#valores">Actos oficiales e institucionales</a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'black',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: '1.2'
  
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '0px'
};

const logoStyle = {
  width: '200px', // Ajusta el tamaño del logo según tus necesidades
  height: 'auto',
  margin:'0'
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin:0
};

export default Header;