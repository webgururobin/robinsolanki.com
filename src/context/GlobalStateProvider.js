import React from "react"
import useGlobalState from "../hooks/useGlobalState"
import ModeContext from "./ModeContext"

const GlobalStateProvider = ({ children }) => {
  return (
    <ModeContext.Provider value={useGlobalState()}>
      {children}
    </ModeContext.Provider>
  )
}

export default GlobalStateProvider
