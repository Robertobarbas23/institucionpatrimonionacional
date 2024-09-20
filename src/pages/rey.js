import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import imagenQr from "/src/images/qr.png"; 

const qr = () => (
  <Layout>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>GENERA TU QR </h1>

      
      <img
        src={imagenQr}
        alt="Genera QR"
        style={{ maxWidth: "10%", height: "auto", marginBottom: "20px" }}
      />

  
      <p style={{ maxWidth: "800px", textAlign: "justify", marginBottom: "40px" }}>
        Bienvenidos a Patrimonio Nacional. Somos una institución histórica que preserva y
        cuida de más de 1.000 inmuebles y más de 170.000 piezas artísticas. Comparte y
        preserva esta información generando tu propio código QR simulado. Introduce el texto
        deseado en el cuadro de entrada para crear tu QR.
      </p>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h3>Generador de Código QR </h3>
        <p>Introduce el texto para generar tu código QR.</p>

      
        <input
          type="text"
          placeholder="Introduce texto o URL"
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "100%",
            marginBottom: "20px",
          }}
        />

      
        <img
          src={imagenQr}
          alt="QR"
          style={{ width: "256px", height: "256px", margin: "0 auto" }}
        />
          <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert('Tú qr se ha generado correctamente')}
        >
          GENERAR QR
        </button>
      </div>
    </div>
  </Layout>
);

export const Head = () => <Seo title="Generador de QR" />;

export default qr;