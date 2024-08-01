import React from 'react';
import { Link } from 'gatsby';

const NavBar = () => {
  return (
    <nav className='navegacion'>
      <ul>
        <li><Link to="#presidencia">Bienvenido a la presidencia</Link></li>
        <li><Link to="#historia">Conoce nuestra historia</Link></li>
        <li><Link to="#administracion">Consejo de administración</Link></li>
        <li><Link to="#oficiales">Actos oficiales e institucionales</Link></li>
        <li><Link to="#rey">Casa del S.M el Rey</Link></li>
        <li><Link to="#retratos">Retratos oficiales</Link></li>
        <li><Link to="#ministerio">Ministerio de la Presidencia</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;