import styled from "styled-components"

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
  font-family: "Poppins", Arial, sans-serif;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  li {
    display: inline-block;
    margin-right: 2rem;
    transition: all 0.5s ease;
    cursor: pointer;

    .active {
      border-bottom: 2px solid ${props => props.theme.colors.accent};
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
