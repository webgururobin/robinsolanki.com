import styled from "styled-components"

export const ImgButton = styled.img`
  width: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  padding: 5px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 1px dotted #f06666;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.accent};

  :hover {
    transform: rotate(15deg);
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0rem;
  }
`
