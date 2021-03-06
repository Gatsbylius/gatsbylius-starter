import { createGlobalStyle } from "styled-components";
import { fontFamily, spacing, color } from "helpers/themeHelpers";
import fonts from "./fonts";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: 'swap';
    font-weight: 300;
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url(${fonts.MontserratWoff2}) format('woff2'),
        url(${fonts.MontserratWoff}) format('woff'),
        url(${fonts.MontserratTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: italic;
    font-display: 'swap';
    font-weight: 300;
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
        url(${fonts.MontserratItalicWoff2}) format('woff2'),
        url(${fonts.MontserratItalicWoff}) format('woff'),
        url(${fonts.MontserratItalicTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: 'swap';
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url(${fonts.MontserratBoldWoff2}) format('woff2'),
        url(${fonts.MontserratBoldWoff}) format('woff'),
        url(${fonts.MontserratBoldTtf}) format('truetype');
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    min-height: calc(100% - ${spacing(["lg"])});
  }

  /* Remove default padding */
  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  /* Remove default margin */
  body,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    outline: none;
  }

  /* Transform cursor in pointer for buttons */
  button {
    cursor: pointer;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ==== Typography ==== */
  html {
    font-size: ${({ theme }) => `${theme.typography.baseFontSize}em`};
  }

  body {
    ${fontFamily("bodyFont")}
    line-height: ${spacing(["sm"])};
  }

  h1,
  h2,
  h3 {
    ${fontFamily("titleFont")}
    font-weight: bold;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }


  body {
    background-color: ${color("background")};
  }

`;
