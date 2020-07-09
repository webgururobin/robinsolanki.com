import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
