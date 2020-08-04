import React from "react"

// Images
import DayIcon from "../../images/day-icon.svg"
import NightIcon from "../../images/night-icon.svg"

// Styles
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ state, dispatch }) => (
  <ImgButton
    src={state.isDark ? NightIcon : DayIcon}
    alt="mode"
    onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
  />
)

export default ModeButton
