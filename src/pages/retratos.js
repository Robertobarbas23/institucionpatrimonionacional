import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import imagenFelipecapitan from "/src/images/felipecapitan.jpg";
import imagenFelipeejercito from "/src/images/felipeejercito.jpg";
import imagenFelipevi from "/src/images/felipevi.jpg";
import imagenFelipevitrajeoficial from "/src/images/felipevitrajeoficial.jpg";
import imagenLeonor from "/src/images/leonor.jpg";
import imagenReyes from "/src/images/reyes.jpg";
import imagenSofia from "/src/images/sofia.jpg";


const Card = ({ imageSrc, altText, title }) => (
  <div style={{
    border: "1px solid #ccc", 
    borderRadius: "8px", 
    padding: "16px", 
    textAlign: "center", 
    margin: "16px",
    maxWidth: "300px",
    color:"white",
    backgroundColor: "grey",
    fontFamily:"times new roman"
  }}>
    <img src={imageSrc} alt={altText} style={{ width: "100%", borderRadius: "8px" }} />
    <h3>{title}</h3>
  </div>
);

const Retratos = () => (
  <Layout>
       <Link></Link>
    <h1>Retratos de SS.MM.</h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Card 
        imageSrc={imagenFelipecapitan} 
        altText="Imagen de Felipe Capitan" 
        title="Felipe Capitán" 
      />
      <Card 
        imageSrc={imagenFelipeejercito} 
        altText="Imagen de Felipe en el Ejército" 
        title="Felipe en el Ejército" 
      />
      <Card 
        imageSrc={imagenFelipevi} 
        altText="Imagen de Felipe VI" 
        title="Felipe VI" 
      />
      <Card 
        imageSrc={imagenFelipevitrajeoficial} 
        altText="Imagen de Felipe con Traje Oficial" 
        title="Felipe con Traje Oficial" 
      />
      <Card 
        imageSrc={imagenReyes} 
        altText="Imagen de SS.MM. los Reyes" 
        title="SS.MM. los Reyes" 
      />
      <Card 
        imageSrc={imagenSofia} 
        altText="Imagen de Sofia" 
        title="Sofía" 
      />
      <Card 
        imageSrc={imagenLeonor} 
        altText="Imagen de Leonor" 
        title="Leonor" 
      />
    </div>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default Retratos;