import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.color.background};
  }
`;
