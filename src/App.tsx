import React, { useMemo } from "react";
import { Home } from "./Pages/Home/Home";
import { Header } from "./components/Header";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { StoryIntro } from "./Pages/StoryIntro/StoryIntro";

function App() {
  const { isDarkMode } = useAppState(s => s.darkMode);
  return (
    <div>
      <ThemeProvider theme={MainTheme}>
        {useMemo(
          () => (
            <GlobalStyle isDarkMode={isDarkMode} />
          ),
          [isDarkMode]
        )}
      </ThemeProvider>
      <Home />
      <StoryIntro />
    </div>
  );
}

export default App;
