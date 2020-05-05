import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --body-font: Arial, Helvetica, sans-serif;
  }

   body {
    font-family: var(--body-font);
    font-size: 16px;
  }

  .container {
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
    min-height: 100vh;
  }

  h1 {
    font-size: 64px;
    line-height: 1;
  }

  a {
    text-decoration: none;
    color: #1c1c1c;
    transition: all ease .2s;

    &:hover {
      border-bottom: 1px solid #000;
    }
  }
`

export default GlobalStyle
