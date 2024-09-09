import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby";
import imagenReyes from "/src/images/reyes.jpg";






const Rey = () => (
  <Layout>
  
    <h1>S.M El Rey</h1>
    <img src={imagenReyes} alt="Imagen de los Reyes en Palacio de Madrid" width= "500px"/>

  
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Rey;