import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div:first-child {
    width: 100% !important;

    img {
      display: block;
      height: 70rem;
    }
  }
`

export const CardSingle = styled.div`
  position: relative;
  margin: 2rem 0;
  margin-bottom: 4rem;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    transition: all 0.5s ease;

    :hover {
      border-bottom: 1px solid ${props => props.theme.colors.text};
      opacity: 0.7;
    }
  }

  img {
    width: 100%;
    height: 50rem;
    object-fit: cover;
    object-position: top center;
  }

  :first-child div {
    position: absolute;

    bottom: 2rem;
    left: 1rem;
  }

  ul {
    margin-top: 1rem;
    list-style-type: none;
  }

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
`
