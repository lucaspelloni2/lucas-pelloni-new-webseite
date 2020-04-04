import React, { useCallback, useMemo } from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { Pages } from "./Pages/Pages";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowSize } from "./components/useWindowSize";

function App() {
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { height } = useWindowSize();

  const computeCurrentPage = useCallback(() => {

  }, []);

  useScrollPosition(({ currPos }) => {
    console.log(currPos, height);
  }, [height]);

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
