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
    color: ${props => props.theme.colors.text};
    font-size: 1.6rem;
    box-sizing: border-box;
    margin-top: 1rem;
    margin-bottom: 1.6rem;
    resize: vertical;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    transition: all 0.3s ease 0s;
    background: ${props => props.theme.colors.background};
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }

  textarea {
    height: 20rem;
  }

  input[type="submit"] {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    background-color: ${props => props.theme.colors.accent};
    color: white;
    padding: 1rem 3rem;
    margin: 1rem 0;
    border: none;
    border-radius: 0px;
    cursor: pointer;
    font-size: 1.8rem;
  }

  input[type="submit"]:hover {
    filter: brightness(90%);
  }

  .hide,
  label {
    display: none;
  }
`
