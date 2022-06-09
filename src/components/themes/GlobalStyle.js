import { createGlobalStyle } from 'styled-components';

//TODO instalar o styled-normalize

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray100};
    font-family: ${({ theme }) => theme.fontFamily};
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
