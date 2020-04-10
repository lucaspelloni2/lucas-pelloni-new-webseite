import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import styled, { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
import { Pages } from "./Pages/Pages";
import { useMouseWheel } from "./components/useMouseWheel";

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
  width: 100%;
`;

const A = styled(Child)`
  background: red;
`;

const B = styled(Child)`
  background: aqua;
`;

function App() {
  const { isDarkMode } = useAppState(s => s.darkMode);

  const { ref, direction } = useMouseWheel();

  useEffect(() => {
    console.log(direction);
  }, [direction]);

  // il primo da 0 a -100
  // il secondo da 100 0 etc.
  return (
    <Parent ref={ref}>
      <A translation={0} />
      <B translation={100} />
    </Parent>
  );
}

export default App;
