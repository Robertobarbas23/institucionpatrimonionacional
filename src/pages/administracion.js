import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import imagenAlmeida from "/src/images/almeida.jpg";
import imagenGerente from "/src/images/gerente.jpg";
import imagenHistoriaarte from "/src/images/historiaarte.jpg";
import imagenIngenierosuperior from "/src/images/ingenierosuperior.jpg";
import imagenLiteratura from "/src/images/literatura.jpg";
import imagenPresidenteteatro from "/src/images/presidenteteatro.jpg";
import imagenRealacademia from "/src/images/realacademia.jpg";
import imagenSecretariageneral from "/src/images/secretariageneral.jpg";
import imagenSecretariogeneralrey from "/src/images/secretariogeneralrey.jpg";
import imagenSubsecretario from "/src/images/subsecretario.jpg";


const cardStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #ddd",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  margin: "20px",
  maxWidth: "300px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "15px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "20px",
  justifyItems: "center",
};

const Administracion = () => (
  <Layout>
    <Link></Link>
    <h1>ADMINISTRACION</h1>
    <p style={{ textAlign: "justify" }}>
      Patrimonio Nacional, como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española recogidos en la Ley 23/1982, de 16 de junio, del Patrimonio Nacional, tiene como fines principales el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, así como la puesta a disposición de los ciudadanos del patrimonio histórico-artístico que gestiona a través de su uso con fines culturales, científicos y docentes.
      <br />
      <br />
      Esta institución gestiona 24 Palacios, Monasterios, Conventos Reales y edificaciones anexas, abiertas a la visita pública, que constituyen la red de Reales Sitios, y que albergan más de 160.000 bienes muebles histórico-artísticos de todas las disciplinas (pintura, escultura, tapices, relojes, orfebrería, archivos, bibliotecas, instrumentos musicales y mobiliario, entre otros) que constituyen una parte esencial del patrimonio cultural español al estar firmadas por los mejores artistas de todas las épocas. A ello se une un importante patrimonio natural constituido por jardines históricos, bosques y otros espacios naturales que, juntos, alcanzan 22.000 hectáreas y albergan gran cantidad de fauna salvaje.
    </p>


    <div style={gridStyle}>
    
      

      
      <div style={cardStyle}>
        <img src={imagenAlmeida} alt="José Luis Martínez-Almeida" style={imageStyle} />
        <h3>José Luis Martínez-Almeida</h3>
        <p>
          Alcalde de Madrid. Licenciado en Derecho y abogado del Estado desde 2001. Ha sido director general del Patrimonio Histórico de la Comunidad de Madrid.
        </p>
      </div>

    
      
      <div style={cardStyle}>
        <img src={imagenGerente} alt="María Dolores Menéndez" style={imageStyle} />
        <h3>María Dolores Menéndez Company</h3>
        <p>
          Gerente de Patrimonio Nacional. Licenciada en Ciencias Económicas y Empresariales por la Universidad Complutense de Madrid.
        </p>
      </div>

      
      <div style={cardStyle}>
        <img src={imagenHistoriaarte} alt="Ana María Arias" style={imageStyle} />
        <h3>Ana María Arias de Cossío</h3>
        <p>
          Doctora en Historia del Arte y catedrática emérita. Ha investigado pintura e historia intelectual, y publicado 14 libros.
        </p>
      </div>

      
      <div style={cardStyle}>
        <img src={imagenLiteratura} alt="Mª ÁNGELES HERMOSILLA ÁLVAREZ" style={imageStyle} />
        <h3>Mª ÁNGELES HERMOSILLA ÁLVAREZ</h3>
        <p>
        Catedrática de Teoría de la Literatura y Literatura Comparada en la Universidad de Córdoba.

Ha impartido conferencias en distintas universidades españolas y ha sido Profesora Visitante o docente de Postgrado en universidades extranjeras, como París 8, Pau et des pays de l´Adour, La República de Uruguay o Yale University.
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenPresidenteteatro} alt="GREGORIO MARAÑÓN Y BERTRÁN DE LIS" style={imageStyle} />
        <h3>GREGORIO MARAÑÓN Y BERTRÁN DE LIS</h3>
        <p>
          Ingeniero Superior, ha sido Consejero Delegado de Bayer Hispania y CEO de Siemens. Actualmente es vicepresidente de la Fundación Bertelsmann.
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenRealacademia} alt="MARÍA DEL CARMEN IGLESIAS CANO" style={imageStyle} />
        <h3>MARÍA DEL CARMEN IGLESIAS CANO</h3>
        <p>
        Directora de la Real Academia de la Historia desde diciembre de 2014 (reelegida en 2018)

Académica numeraria de la Real Academia de la Historia desde 1991 y de la Real Academia Española desde 2000, es catedrática de Historia de las Ideas y Formas Políticas de la Universidad Complutense (1984-2000).
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenSecretariageneral} alt="JUDIT ALEXANDRA GONZÁLEZ PEDRAZ" style={imageStyle} />
        <h3>JUDIT ALEXANDRA GONZÁLEZ PEDRAZ</h3>
        <p>
        Secretaria general de la Presidencia del Gobierno.

Nacida en 1979 en Madrid. Licenciada en Derecho por la Universidad Autónoma de Madrid. Ingresó en el Cuerpo Superior de Administradores Civiles del Estado en el 2006.

Ha sido directora del Departamento de Coordinación Técnica y Jurídica, dependiente del Gabinete del Presidente del Gobierno; secretaria general de la Escuela de Organización Industrial (EOI).
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenSecretariogeneralrey} alt="DOMINGO MARTÍNEZ PALOMO" style={imageStyle} />
        <h3>DOMINGO MARTÍNEZ PALOMO</h3>
        <p>
        Secretario general de la Casa de su Majestad el Rey.

Tras superar el Curso Selectivo, ingresó en la Academia General Militar en 1974, siendo promovido al empleo de Teniente de la Guardia Civil en 1978. Es licenciado en Derecho por la Universidad Complutense de Madrid.
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenSubsecretario} alt="ALBERTO HERRERA RODRÍGUEZ" style={imageStyle} />
        <h3>ALBERTO HERRERA RODRÍGUEZ</h3>
        <p>
        Subsecretario del Ministerio de Presidencia, Justicia y Relaciones con las Cortes .

Nacido en Madrid en 1983. Pertenece al Cuerpo Superior de Administradores Civiles del Estado.
        </p>
      </div>
      <div style={cardStyle}>
        <img src={imagenIngenierosuperior} alt="Francisco Belil" style={imageStyle} />
        <h3>Francisco Belil Creixell</h3>
        <p>
          Ingeniero Superior, ha sido Consejero Delegado de Bayer Hispania y CEO de Siemens. Actualmente es vicepresidente de la Fundación Bertelsmann.
        </p>
      </div>

      
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Administracion;