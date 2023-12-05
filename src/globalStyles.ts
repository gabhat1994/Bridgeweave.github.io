import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 24px;
    box-sizing: border-box;
    @media (max-width: 600px) {
        padding: 16px;
    }
  }
`;
