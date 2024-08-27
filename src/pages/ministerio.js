import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";
import imagenPeluquin from "/src/images/peluquin.jpg"






const ministerio = () => (
  <Layout>
     <a href="https://www.mpr.gob.es/Paginas/index.aspx" target="_blank" rel="noopener noreferrer">
   <Link></Link>
    <h1>MINISTERIO</h1>
    <img src={imagenPeluquin} alt="descripcion de la imagen" width="500px"/>
    </a>
  
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default ministerio;