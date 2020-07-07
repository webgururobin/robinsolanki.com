import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--site-max-width);
  height: 5rem;
  margin: 1rem auto;
  padding: 1rem;

  .logo {
    color: ${props => props.theme.colors.text};
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    border-bottom: none;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    height: 3rem;
  }
`
export const Logo = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;

  span.red {
    color: ${props => props.theme.colors.accent};
  }
`

export const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
