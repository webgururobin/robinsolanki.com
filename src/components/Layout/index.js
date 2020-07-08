import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"

// Components
import SEO from "../SEO"
import Header from "../Header"
import Footer from "../Footer"

// Styles
import { GlobalStyle, lightTheme, darkTheme } from "../../styles/GlobalStyles"

// Context
import { ModeContext } from "../../context/ModeProvider"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const [darkMode] = useContext(ModeContext)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SEO />
      <Header siteTitle={data.title} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
