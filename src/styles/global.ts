import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.family.primary};
  }
  html {
    height: 100vh;
  }
  body {
    height: 100vh;
    font-size: 1rem;
    background-color: #FAFAFA;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  input {
    outline: none;
  }
`;

export default GlobalStyle;
