import styled from "styled-components"

export const HamburgerIcon = styled.div`
  display: none;
  width: 3rem;
  z-index: 1000;
  cursor: pointer;
  align-self: center;
  text-align: right;

  div,
  :after,
  :before {
    background: ${props => props.theme.colors.text};
    content: "";
    display: block;
    height: 2px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  :before {
    transform: ${props =>
      props.menuOpen ? "translateY(9px) rotate(45deg)" : ""};
  }

  :after {
    transform: ${props =>
      props.menuOpen ? "translateY(-9px) rotate(-45deg)" : ""};
  }

  div {
    transform: ${props => (props.menuOpen ? "scale(0)" : "")};
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 0.5rem;
  }
`
