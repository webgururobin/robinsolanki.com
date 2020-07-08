import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: var(--site-max-width);
  height: 7rem;
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
    height: 7rem;
    margin-top: -3rem;
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

export const StickyWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: -2px;
  width: 100%;
  z-index: 1000;
  background: ${props => props.theme.colors.background};
`
