import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  body {
    width: 90%;
    max-width: 1024px;
    padding: 0;
    margin: 0 auto;
    font-size: 1.6rem;
  }
  section {
    width: 90%;
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
`;
