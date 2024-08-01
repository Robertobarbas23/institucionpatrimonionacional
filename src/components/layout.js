import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import NavBar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description,
          author,
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <Header 
      siteTitle={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
      
      />
<NavBar></NavBar>
      <div>
        <main>
          {children}
          </main>
       
      </div>
    
      <Footer
       siteTitle={data.site.siteMetadata.title }
       author= {data.site.siteMetadata.author}
        ></Footer>
    </>
  )
}

export default Layout
