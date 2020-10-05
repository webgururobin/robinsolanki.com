import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"

// Components
import Seo from "../Seo"
import Header from "../Header"
import Footer from "../Footer"

// Styles
import { GlobalStyle, lightTheme, darkTheme } from "../../styles/GlobalStyles"

// Context
import ModeContext from "../../context/ModeContext"

// hooks
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const { state } = useContext(ModeContext)

  return (
    <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Seo />
      <Header siteTitle={data.title} />
      <div>{children}</div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
