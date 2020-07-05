import { createGlobalStyle } from "styled-components"
import LemonMilk from "../fonts/lemonMilk.woff"
import Poppins from "../fonts/Poppins.woff"

export const colors = {
  lightColor: "#F8F8F8",
  darkColor: "#131313",
}

export const darkTheme = {
  colors: {
    background: colors.darkColor,
    text: colors.lightColor,
  },
}

export const lightTheme = {
  colors: {
    background: colors.lightColor,
    text: colors.darkColor,
  },
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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

  :root {
    --site-max-width: 1366px;
  }

   body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 10px;
  }

   h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text};
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  .main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
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

  a {
    border-bottom: 1px solid ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.text};
    transition: all ease .2s;
    text-decoration: none;

    &:hover {
      border-bottom: none;
    }
  }
`
