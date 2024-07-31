import React from 'react';

const InstitutionalInfo = () => {
  return (
    <div style={infoStyle}>
      <section id="nosotros">
        <h2>Bienvenido a la presidencia</h2>
        <p>Descripción sobre la institución...</p>
      </section>
      <section id="mision">
        <h2>Conoce nuestra historia</h2>
        <p>Nuestra misión es...</p>
      </section>
      <section id="vision">
        <h2>Consejo de administración</h2>
        <p>Nuestra visión es...</p>
      </section>
      <section id="valores">
        <h2>Actos oficiales e institucionales</h2>
        <p>Nuestros valores incluyen...</p>
      </section>
    </div>
  );
};

const infoStyle = {
  padding: '20px',
  textAlign: 'left'
};

export default InstitutionalInfo;
