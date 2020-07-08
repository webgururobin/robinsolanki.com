import React from "react"

// Images
import DayIcon from "../../images/day-icon.svg"
import NightIcon from "../../images/night-icon.svg"

// Styles
import { ImgButton } from "./ModeButton.styles"

const ModeButton = ({ darkMode, setDarkMode }) => (
  <ImgButton
    src={darkMode ? NightIcon : DayIcon}
    alt="mode"
    onClick={() => setDarkMode(prev => !prev)}
  />
)

export default ModeButton
