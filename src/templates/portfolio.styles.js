import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  img {
    height: 70rem;
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }
`

export const PortfolioDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;

  hr {
    margin: 2rem 0;
  }

  ul {
    list-style-type: none;
    li {
      display: inline-block;
      margin-right: 0.5rem;
      :after {
        content: ",";
      }

      :last-child:after {
        content: "";
      }
    }
  }

  span {
    font-size: 1.6rem;
  }

  div:first-child {
    margin-right: 10rem;
    @media (max-width: 768px) {
      margin-right: 0rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
