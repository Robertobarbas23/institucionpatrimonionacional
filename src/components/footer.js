import React from 'react';

const Footer = ({siteTitle,author}) => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {siteTitle}. Todos los derechos reservados {author}.</p>
    </footer>
  );
};



export default Footer;












