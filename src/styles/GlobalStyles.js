import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
    --purple: #8a27f3;
    --teal: #02a9f8;
    --blue: #1b73bd;
  }
  body {
    width: 90%;
    max-width: 1024px;
    padding: 0;
    margin: 0 auto;
    font-size: 1.6rem;
    background: #171824;
    color: white;
  }
  section {
    width: 90%;
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.4rem; }
  h3 { font-size: 2rem; }
`;
