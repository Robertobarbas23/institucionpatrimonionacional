import React from 'react';

const Footer = () => (
  <footer style={{ backgroundColor: '#333', color: '#FFF', padding: '40px 20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'left' }}>
      
      <div>
        <h4>VISITA</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Descubre los Reales Sitios</li>
          <li>Jardines Históricos y Espacios Naturales</li>
        </ul>
      </div>
      
      <div>
        <h4>ACTUALIDAD</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Noticias</li>
          <li>Agenda</li>
          <li>Conciertos</li>
          <li>Exposiciones</li>
          <li>Conferencias</li>
          <li>Objetivo Patrimonio</li>
          <li>Concurso de fotografía Infanta Sofía</li>
          <li>Premio Reina Sofía de Poesía Iberoamericana</li>
          <li>Multimedia</li>
        </ul>
      </div>

      <div>
        <h4>COLECCIONES</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Explora las Colecciones Reales</li>
          <li>Archivo General de Palacio</li>
          <li>Real Biblioteca de Palacio</li>
          <li>Real Biblioteca del Monasterio de El Escorial</li>
          <li>Restauración</li>
          <li>Préstamos para exposiciones</li>
          <li>Publicaciones</li>
        </ul>
      </div>

      <div>
        <h4>EDUCACIÓN</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Actividades</li>
          <li>Biblioteca de Recursos didácticos</li>
          <li>Concurso de pintura infantil y juvenil</li>
          <li>Programa de escuelas taller y talleres de empleo</li>
          <li>Becas</li>
          <li>Investigadores</li>
        </ul>
      </div>

      <div>
        <h4>NOSOTROS</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Sobre Patrimonio Nacional</li>
          <li>Cartas de servicios</li>
          <li>Transparencia</li>
          <li>Empleo público</li>
          <li>Entradas</li>
          <li>¿Seguimos en contacto?</li>
          <li>Arrendamientos</li>
          <li>Solicitudes de rodaje</li>
          <li>Cesión de espacios de Patrimonio Nacional</li>
        </ul>
      </div>
    </div>
    
    <div style={{ borderTop: '1px solid #555', marginTop: '20px', paddingTop: '20px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Accesibilidad</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Aviso legal</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Política de privacidad</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Política de cookies</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Certificación ENS</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Contacto</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>RSS</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Mapa web</a></li>
      </ul>
      
      <div>
        <img src="logo-gobierno.png" alt="Gobierno de España" style={{ width: '150px', marginBottom: '20px' }} />
        <img src="logo-ministerio.png" alt="Ministerio de la Presidencia, Justicia y Relaciones con las Cortes" style={{ width: '250px' }} />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <p>Síguenos en</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href="#"><img src="tiktok-icon.png" alt="TikTok" style={{ width: '30px' }} /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" style={{ width: '30px' }} /></a>
          <a href="#"><img src="youtube-icon.png" alt="YouTube" style={{ width: '30px' }} /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" style={{ width: '30px' }} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;










