import styled from "styled-components"

export const Wrapper = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
