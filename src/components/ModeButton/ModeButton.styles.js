import styled from "styled-components"

export const ImgButton = styled.img`
  width: 6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  padding-right: 1rem;
  padding-bottom: 1rem;

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0rem;
  }
`
