import React from "react";
import { Home } from "./Pages/Home/Home";
import { Header } from "./components/Header";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";

function App() {
  const { isDarkMode } = useAppState(s => s.darkMode);
  return (
    <div>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle isDarkMode={isDarkMode} />
      </ThemeProvider>
      <Header />
      <Home />
    </div>
  );
}

export default App;
