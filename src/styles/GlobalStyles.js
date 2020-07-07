import { createGlobalStyle } from "styled-components"
import LemonMilk from "../fonts/LemonMilk.woff"
import Poppins from "../fonts/Poppins.woff"

export const colors = {
  lightColor: "#F8F8F8",
  darkColor: "#131313",
  accentColor: "#b02004",
}

export const darkTheme = {
  colors: {
    background: colors.darkColor,
    text: colors.lightColor,
    accent: colors.accentColor,
  },
}

export const lightTheme = {
  colors: {
    background: colors.lightColor,
    text: colors.darkColor,
    accent: colors.accentColor,
  },
}

// Global Styles
export const GlobalStyle = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'LemonMilk';
    src:  url(${LemonMilk}) format('woff');
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src:  url(${Poppins}) format('woff');
    font-style: normal;
  }


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    /* transition: all 5s ease; */
  }

  main {
    max-width: var(--site-max-width);
    margin: 40px auto;
    padding: auto 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text};
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 6.5rem;
    line-height: 8.5rem;

    @media screen and (max-width: 768px) {
      font-size: 3.6rem;
      line-height: 5.5rem;
    }
  }

  h2 {
    font-size: 3.6rem;
    line-height: 5.5rem;

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 3.6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  strong {
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    line-height: 3.6rem;

    @media screen and (max-width: 768px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`
