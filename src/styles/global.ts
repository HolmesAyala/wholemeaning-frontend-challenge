import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1rem;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
  }

  body, button, input {
    font-family: 'Share Tech Mono', monospace;
  }
`;
