import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
