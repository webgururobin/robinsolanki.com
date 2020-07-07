import React, { useState } from "react"
import { Link } from "gatsby"

//Components
import Menu from "../Menu"
import Hamburger from "../Hamburger"
import MobileMenu from "../MobileMenu"

// Hooks
import { useSiteConfigQuery } from "../../hooks/useSiteConfigQuery"

// Styles
import { Wrapper, RightWrapper, Logo } from "./Header.styles"

const Header = () => {
  const siteConfig = useSiteConfigQuery()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <Logo>
          {" "}
          {siteConfig.title}
          <span className="red">.</span>
        </Logo>
      </Link>
      <RightWrapper>
        {/* <div>Mode Button</div> */}
        <Menu items={siteConfig.menu} />
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      </RightWrapper>
    </Wrapper>
  )
}

export default Header
