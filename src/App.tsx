import React, { useMemo } from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { Pages } from "./Pages/Pages";

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
      <Pages />
    </div>
  );
}

export default App;
