import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.black};
  }

  a, button {
    font-family: 'JetBrains Mono', monospace;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
