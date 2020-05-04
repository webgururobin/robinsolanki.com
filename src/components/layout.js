import React from "react"

// Styles
import GlobalStyle from "../styles/GlobalStyles"

const layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default layout
