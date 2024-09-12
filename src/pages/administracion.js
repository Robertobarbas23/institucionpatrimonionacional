import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import imagenAlmeida from "/src/images/almeida.jpg"
import imagenGerente from "/src/images/gerente.jpg"
import imagenHistoriaarte from "/src/images/historiaarte.jpg"
import imagenIngenierosuperior from "/src/images/ingenierosuperior.jpg"
import imagenLiteratura from "/src/images/literatura.jpg"
import imagenPresidenteteatro from "/src/images/presidenteteatro.jpg"
import imagenRealacademia from "/src/images/realacademia.jpg"
import imagenSecretariageneral from "/src/images/secretariageneral.jpg"
import imagenSecretariogeneralrey from "/src/images/secretariogeneralrey.jpg"
import imagenSubsecretario from "/src/images/subsecretario.jpg"

const Administracion = () => (
  <Layout>
  <Link></Link>
    <h1>ADMINISTRACION</h1>
    <p style={{ textAlign: "justify" }}>Patrimonio Nacional, como organismo público responsable de los bienes de titularidad del Estado que proceden del legado de la Corona española recogidos en la Ley 23/1982, de 16 de junio, del Patrimonio Nacional, tiene como fines principales el apoyo a la Jefatura del Estado para la alta representación que la Constitución y las leyes le atribuyen, así como la puesta a disposición de los ciudadanos del patrimonio histórico-artístico que gestiona a través de su uso con fines culturales, científicos y docentes.

Esta institución gestiona 24 Palacios, Monasterios, Conventos Reales y edificaciones anexas, abiertas a la visita pública, que constituyen la red de Reales Sitios, y que albergan más de 160.000 bienes muebles histórico-artísticos de todas las disciplinas (pintura, escultura, tapices, relojes, orfebrería, archivos, bibliotecas, instrumentos musicales y mobiliario, entre otros) que constituyen una parte esencial del patrimonio cultural español al estar firmadas por los mejores artistas de todas las épocas. A ello se une un importante patrimonio natural constituido por jardines históricos, bosques y otros espacios naturales que, juntos, alcanzan 22.000 hectáreas y albergan gran cantidad de fauna salvaje.</p>


<img src={imagenAlmeida} alt="src/images/almeida.jpg" width = "800px"/>
<img src={imagenGerente} alt="src/images/gerente.jpg" width = "800px"/>
<img src={imagenHistoriaarte} alt="src/images/historiaarte.jpg" width = "800px"/>
<img src={imagenIngenierosuperior} alt="src/images/ingenierosuperior.jpg" width = "800px"/>
<img src={imagenLiteratura} alt="src/images/literatura.jpg" width = "800px"/>
<img src={imagenPresidenteteatro} alt="src/images/presidenteteatro.jpg" width = "800px"/>
<img src={imagenRealacademia} alt="src/images/realacademia.jpg" width = "800px"/>
<img src={imagenSecretariageneral} alt="src/images/secretariageneral.jpg" width = "800px"/>
<img src={imagenSecretariogeneralrey} alt="src/images/secretariogeneralrey.jpg" width = "800px"/>
<img src={imagenSubsecretario} alt="src/images/subsecretario.jpg" width = "800px"/>
  
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Administracion;