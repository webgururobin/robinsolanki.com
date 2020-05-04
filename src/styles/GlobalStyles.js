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
    font-size: 32px;
  }

  .main {
    /* max-width: 800px; */
    margin: 0 auto;
    position: relative;
    height: 100vh
  }

  h1 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default GlobalStyle
