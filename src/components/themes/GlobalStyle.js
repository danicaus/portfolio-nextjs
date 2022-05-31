import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #c22085;
    --green: #2c9384;
    --white: #FFFFFF;
    --gray-100: #dedede;
    --gray-300: #a3a3a3;
    --black: #0c0c0c;
    --black-700: #3c3c3c;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%;
    background-color: var(--black);
    color: var(--gray-100);
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    border: none;
    background-color: inherit;
  }

`;

export default GlobalStyle;
