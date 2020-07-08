import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: var(--site-max-width);
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`
