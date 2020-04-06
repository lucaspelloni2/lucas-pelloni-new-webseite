import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import styled, { ThemeProvider } from "styled-components";
import useAppState from "./reducers/useAppState";
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

  const myRef = useRef<HTMLDivElement>(null);

  const guil = useCallback((e: any) => {
    const a = e.wheelDeltaY;
    if (a > 0) {
      console.log("up");
    } else if (a < 0) {
      console.log("down");
    } else {
      console.log("stop");
    }
  }, []);

  useEffect(() => {
    const r = myRef.current;
    if (r) {
      r.addEventListener("mousewheel", guil);
    }
    return () => {
      if (r) {
        r.removeEventListener("mousewheel", guil);
      }
    };
  }, [guil]);

  return (
    <Parent ref={myRef}>
      <A translation={100} />
      <B translation={0} />
    </Parent>
  );
}

export default App;
