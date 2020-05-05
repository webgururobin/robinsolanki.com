import React from "react"

// Components
import SEO from "./Seo"

// Styles
import GlobalStyle from "../styles/GlobalStyles"

const layout = ({ children }) => {
  return (
    <>
      <SEO />
      <GlobalStyle />
      {children}
    </>
  )
}

export default layout
