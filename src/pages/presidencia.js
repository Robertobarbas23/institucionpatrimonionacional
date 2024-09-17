import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import imagenPresidenta from "/src/images/presidencia.jpeg";

const Presidencia = () => (
  <Layout>
       <Link></Link>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      <h1>BIENVENIDO A LA PRESIDENCIA</h1>
      <h1>Ana de la Cueva, presidenta de Patrimonio Nacional</h1>
      <img src={imagenPresidenta} alt="Imagen de la Presidenta Ana de la Cueva" style={{ maxWidth: "48%", height: "auto", marginBottom: "20px" }} />
      <p style={{ maxWidth: "800px", textAlign: "justify" }}>
        Bienvenidos a Patrimonio Nacional. Somos una institución histórico-cultural única en el mundo. Cuidamos de más de 1.000 inmuebles, 170.000 piezas artísticas y 18.000 hectáreas de espacios verdes de gran riqueza medioambiental. Y lo hacemos con una doble misión: preservar y dar a conocer este valiosísimo legado y facilitar a la jefatura del Estado la labor representativa que le otorga nuestra Constitución.
        <br /><br />
        Esta web es una ventana a todo este conjunto de bienes y a las actividades culturales, educativas y científicas que organizamos para su difusión. Una ventana a los 19 palacios reales, reales monasterios y casas de campo en seis comunidades autónomas diferentes. A los parques naturales como el Monte de El Pardo o el Bosque de Riofrío. A los 6.500 cuadros firmados, entre otros, por El Greco, Caravaggio o Velázquez. A la programación de nuestros conciertos. A nuestros talleres. A nuestras publicaciones.
        <br /><br />
        Dar a conocer Patrimonio Nacional es dar a conocer nuestra historia. Y preservar sus bienes de forma sostenible, consciente y rigurosa es asegurar que las futuras generaciones podrán disfrutar de ellos igual que lo hacemos ahora. Somos conscientes de la importancia de nuestra tarea. Por eso queremos abrir nuestras puertas a toda la ciudadanía y ser un punto de encuentro que sirva de elemento de cohesión en nuestra sociedad.
        <br /><br />
        Ana de la Cueva<br />
        Presidenta de Patrimonio Nacional
      </p>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Presidencia;