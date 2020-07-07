import styled from "styled-components"

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.5s ease;

    :hover {
      opacity: 0.7;
    }
  }
`
