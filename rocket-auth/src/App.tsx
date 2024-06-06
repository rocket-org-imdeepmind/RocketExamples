// src/App.tsx
import React from "react";
import Routes from "./routes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import darkTheme from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
