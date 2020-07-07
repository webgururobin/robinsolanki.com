import React from "react"
import { ThemeProvider } from "styled-components"

// Components
import SEO from "../SEO"

// Styles
import { GlobalStyle, lightTheme, darkTheme } from "../../styles/GlobalStyles"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

// TTD Remove darkMode
const darkMode = true

const Layout = ({ children }) => {
  const data = useMetaDataQuery()

  console.log(data)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SEO />
      {children}
    </ThemeProvider>
  )
}

export default Layout
