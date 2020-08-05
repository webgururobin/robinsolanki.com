import styled from "styled-components"

export const ImgButton = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  border: none;
  padding: 0;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  :hover {
    transform: rotate(15deg);
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0rem;
    margin-top: 0.5rem;
  }
`
