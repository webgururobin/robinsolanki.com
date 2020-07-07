import styled from "styled-components"

export const HamburgerIcon = styled.div`
  display: none;
  width: 3rem;
  z-index: 100;
  cursor: pointer;

  :after,
  :before {
    background-color: ${props => props.theme.colors.text};
    border-radius: 0px;
    content: "";
    display: block;
    height: 2px;
    transition: all 0.2 ease-in-out;
  }

  :before {
    margin-bottom: 1.5rem;
    transform: ${props =>
      props.menuOpen ? "translateY(9px) rotate(45deg)" : ""};
  }

  :after {
    transform: ${props =>
      props.menuOpen ? "translateY(-9px) rotate(-45deg)" : ""};
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`
