import styled, { createGlobalStyle } from "styled-components"

export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
  }
`

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  right: ${props => (props.menuOpen ? "0px" : "-320px")};
  width: 320px;
  height: 100%;
  background: ${props => props.theme.colors.background};
  top: 0px;
  padding: 0 0 0 2rem;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Nav = styled.ul`
  position: absolute;
  width: 100px;
  top: 10rem;
  list-style-type: none;
  padding: 0;
  font-family: "Poppins", Arial, sans-serif;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  li {
    transition: all 0.5s ease;
    cursor: pointer;
    margin: 1rem 0;

    .active {
      border-bottom: 2px solid ${props => props.theme.colors.accent};
    }

    :hover {
      opacity: 0.7;
    }
  }
`
