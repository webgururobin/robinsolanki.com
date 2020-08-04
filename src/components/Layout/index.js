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
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const { state } = useContext(ModeContext)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Seo />
      <Header siteTitle={data.title} />
      <motion.div initial="hidden" animate="visible" variants={variants}>
        {children}
      </motion.div>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
