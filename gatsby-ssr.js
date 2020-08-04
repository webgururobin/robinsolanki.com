import React from "react"
import GlobalStateProvider from "./src/context/GlobalStateProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>
}
