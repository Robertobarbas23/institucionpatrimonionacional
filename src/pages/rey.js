import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";
import imagenReyes from "/src/images/reyes.jpg";






const Rey = () => (
  <Layout>
  <a href="https://www.casareal.es/ES/Paginas/home.aspx" target="_blank" rel="noopener noreferrer">
  <Link></Link>
    <h1>S.M El Rey</h1>
    <img src={imagenReyes} alt="Imagen de los Reyes en Palacio de Madrid" width= "500px"/>
</a>
  
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Rey;