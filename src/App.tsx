import React, { useEffect, useState } from "react";
import { GlobalStyle, MainTheme, PAGE_TRANSITION } from "./Layout/Theme";
import styled, { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { useMouseWheel } from "./components/useMouseWheel";
import { Provider, useDispatch } from "react-redux";
import { Pages } from "./Pages/Pages";

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

const A = styled(Child)`
  background: red;
`;

const B = styled(Child)`
  background: aqua;
`;

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  BREAK = "BREAK"
}

function App() {
  const [translation, setTranslation] = useState(0);
  const [direction, setDirection] = useState<null | Direction>(null);
  const { isDarkMode } = useAppState(s => s.darkMode);
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
    if (direction === Direction.DOWN) {
      setTranslation(s => s - 100);
    } else if (direction === Direction.UP) {
      setTranslation(s => (s === 0 ? s : s + 100));
    }
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
  // il primo da 0 a -100
  // il secondo da 100 0 etc.
  // il third da 200 da 100
  // il quarto da 300 da 200
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
