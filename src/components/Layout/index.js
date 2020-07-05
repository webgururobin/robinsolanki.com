import React from "react"
import { ThemeProvider } from "styled-components"

// Components
import SEO from "../Seo"

// Styles
import { GlobalStyle, lightTheme, darkTheme } from "../../styles/GlobalStyles"
// TTD Remove darkMode
const darkMode = true

const layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <SEO />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default layout
