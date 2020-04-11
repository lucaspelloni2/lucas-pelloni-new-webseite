import React, { useEffect, useState } from "react";
import { GlobalStyle, MainTheme, PAGE_TRANSITION } from "./Layout/Theme";
import styled, { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { useMouseWheel } from "./components/useMouseWheel";
import { useDispatch } from "react-redux";
import { Pages } from "./Pages/Pages";
import { Direction } from "./reducers/translation/types";
import { setTranslation } from "./reducers/translation/actions";

const Parent = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Child = styled.div<{ translation: number }>`
  position: absolute;
  transform: ${props => `translateY(${props.translation}%)`};
  height: 100%;
  left: 0;
  transition: ${PAGE_TRANSITION};
  width: 100%;
`;

function App() {
  const [direction, setDirection] = useState<null | Direction>(null);
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { translation } = useAppState(s => s.translation);
  const dispatch = useDispatch();

  const { ref } = useMouseWheel({
    onScrollUp: () => {
      setDirection(Direction.UP);
    },
    onScrollDown: () => {
      setDirection(Direction.DOWN);
    }
  });

  useEffect(() => {
    dispatch(setTranslation(direction));
  }, [direction]);

  useEffect(() => {
    let timer: any = null;
    if (direction) {
      timer = setTimeout(() => {
        setDirection(null);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [direction]);

  return (
    <Parent ref={ref}>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle isDarkMode={isDarkMode} />
      </ThemeProvider>
      <Pages translation={translation} />
    </Parent>
  );
}

export default App;
