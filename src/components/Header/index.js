import React, { useState, useContext } from "react"
import { Link } from "gatsby"

//Components
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"
import ModeButton from "../ModeButton"

// Context
import { ModeContext } from "../../context/ModeProvider"

// Hooks
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

// Styles
import { Wrapper, StickyWrapper, RightWrapper, Logo } from "./Header.styles"

const Header = () => {
  const siteConfig = useSiteConfigQuery()
  const [darkMode, setDarkMode] = useContext(ModeContext)

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <StickyWrapper>
      <Wrapper>
        <Link to="/" className="logo">
          <Logo>
            {" "}
            {siteConfig.title}
            <span className="red">.</span>
          </Logo>
        </Link>
        <RightWrapper>
          <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
          <Menu items={siteConfig.menu} />
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
        </RightWrapper>
      </Wrapper>
    </StickyWrapper>
  )
}

export default Header
