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
    /* max-width: 800px; */
    margin: 0 auto;
    position: relative;
    height: 100vh
  }

  .main {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
