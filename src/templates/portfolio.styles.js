import styled from "styled-components"

export const PortfolioWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 70rem;
    width: 100%;
    object-fit: cover;
    object-position: top center;

    @media screen and (max-width: 767px) {
      object-fit: contain;
      height: 25rem;
      width: 100%;

      picture > img {
        object-fit: contain !important;
        object-position: top !important;
      }
    }
  }
`

export const PortfolioDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  padding: 0 2rem;

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

  .reviews {
    display: flex;

    .star {
      height: 2rem;
      width: 2rem;
      margin-bottom: 1rem;
    }
  }

  div:first-child {
    margin-right: 10rem;
    margin-bottom: 5rem;
    width: 100%;
    @media (max-width: 767px) {
      margin-right: 0rem;
    }
  }

  div:last-child {
    width: 50rem;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
