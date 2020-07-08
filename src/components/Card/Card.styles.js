import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div:first-child {
    width: 100% !important;

    width: 100%;
    background: black;
    /* padding: 2rem; */

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

  @media (max-width: 767px) {
    width: 100%;

    div {
      padding: 1rem 0 0 2rem;
    }
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
    bottom: 0rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 1rem;

    strong,
    a,
    li:after {
      color: #f8f8f8;
    }

    *:hover {
      border-bottom: none;
    }
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
