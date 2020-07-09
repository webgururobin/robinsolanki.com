import styled from "styled-components"

export const Wrapper = styled.div`
  margin-bottom: 2rem;

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    width: 100%;
    padding: 1.6rem;
    border: 1px solid ${props => props.theme.colors.text};
    box-sizing: border-box;
    margin-top: 1rem;
    margin-bottom: 1.6rem;
    resize: vertical;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  textarea {
    height: 20rem;
  }

  .hide {
    display: none;
  }
`
