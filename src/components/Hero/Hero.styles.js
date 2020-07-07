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

  ul {
    list-style-type: none;
    align-self: flex-start;

    @media screen and (max-width: 768px) {
      align-self: center;
    }
  }

  li {
    display: inline-block;
    margin-right: 0.5rem;

    :after {
      content: ",";
    }

    :last-child {
      margin-right: 0;
    }

    :last-child:after {
      content: "";
    }
  }
`
