import { createGlobalStyle } from "styled-components"
import LemonMilk from "../fonts/LemonMilk.woff"
import Poppins from "../fonts/Poppins.woff"

export const colors = {
  lightColor: "#F8F8F8",
  darkColor: "#131313",
  accentColor: "#f06666",
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

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: var(--site-max-width);
    margin: 2rem auto;
    padding: auto 1rem;
  }

  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
    img {
      width: 100%;
      display: block;
      transform: scale(1.2);
      margin-bottom: 8rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text};
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 6.5rem;
    line-height: 8.5rem;

    @media screen and (max-width: 767px) {
      font-size: 3.6rem;
      line-height: 5.5rem;
    }
  }

  h2 {
    font-size: 3.6rem;
    line-height: 5.5rem;

    @media screen and (max-width: 767px) {
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 3.6rem;

    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  a {
    color: ${props => props.theme.colors.accent};
  }

  .button {
    padding: 1rem 3rem;
    margin: 1rem 0;
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.background};
    text-decoration: none; 
    font-size: 1.8rem;
    line-height: 3.6rem;
    transition: all 0.5s ease;

    width: 124px;
    height: 38px;
    border: none;
    transition: all .3s ease 0s;
    cursor: pointer;

    :hover {
      filter: brightness(90%);
    }

    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }   
  }

  img.center {
    display: block;
    margin: 5rem auto;
  }

  img.right {
    float: right;
    margin: 4rem 0 5rem 5rem;
  }
  

  strong {
    font-family: "LemonMilk", Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    line-height: 3.6rem;

    @media screen and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }
`
