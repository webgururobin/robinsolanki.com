import styled from "styled-components"

export const Copyright = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  .heart {
    color: ${props => props.theme.colors.accent};
  }

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.5s ease;

    :hover {
      opacity: 0.7;
    }
  }
`
export const ClientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: var(--site-max-width);
  margin: 0 auto;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 30rem;
    height: 30rem;
    margin: 2rem;
    background: ${props => props.theme.colors.text};
  }

  h3 {
    color: ${props => props.theme.colors.background};
    text-align: center;
  }
`

export const CTA = styled.div`
  text-align: center;
  margin: 5rem auto;

  h2 {
    margin-bottom: 3rem;
  }
`
