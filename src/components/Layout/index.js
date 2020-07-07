import React from "react"
import { ThemeProvider } from "styled-components"

// Components
import SEO from "../SEO"
import Header from "../Header"

// Styles
import { GlobalStyle, lightTheme, darkTheme } from "../../styles/GlobalStyles"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// TTD Remove darkMode
const darkMode = true

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SEO />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
