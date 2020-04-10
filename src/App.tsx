import React, { useEffect, useState } from "react";
import { PAGE_TRANSITION } from "./Layout/Theme";
import styled from "styled-components";
import useAppState from "./reducers/useAppState";
import { Direction, useMouseWheel } from "./components/useMouseWheel";

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

function App() {
  const [translation, setTranslation] = useState(0);
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { ref, direction } = useMouseWheel();

  useEffect(() => {
    if (direction === Direction.DOWN) {
      setTranslation(s => s - 100);
    } else if (direction === Direction.UP) {
      setTranslation(s => (s === 0 ? s : s + 100));
    }
  }, [direction]);

  console.log(translation);
  // il primo da 0 a -100
  // il secondo da 100 0 etc.
  // il third da 200 da 100
  // il quarto da 300 da 200
  return (
    <Parent ref={ref}>
      <A translation={translation}>First Child</A>
      <B translation={translation + 100}>Second Child</B>
      <A translation={translation + 200}>Third Child</A>
      <B translation={translation + 300}>Fourth Child</B>
    </Parent>
  );
}

export default App;
