import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
