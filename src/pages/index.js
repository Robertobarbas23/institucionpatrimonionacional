import * as React from "react"
import Header from "../components/header"
import InstitutionalInfo from "../components/institucionalinfo"
import Footer from "../components/footer"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
   
    <h1>Esta es la página de la institución de Patrimonio Nacional</h1>
    <InstitutionalInfo />
    <Footer />
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;