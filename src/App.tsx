import React, { useEffect, useState } from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import styled, { ThemeProvider } from "styled-components";
import { useMouseWheel } from "./hooks/useMouseWheel";
import { useDispatch } from "react-redux";
import { Pages } from "./Pages/Pages";
import { Direction } from "./reducers/translation/types";
import { setTranslation } from "./reducers/translation/actions";
import { useTheme } from "./hooks/useTheme";

const Parent = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

function App() {
  const [direction, setDirection] = useState<null | Direction>(null);
  const { push } = useHistory();
  const { color, background } = useTheme();
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
  }, [direction, dispatch]);

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
        <GlobalStyle color={color} background={background} />
      </ThemeProvider>
      <Pages />
    </Parent>
  );
}

export default App;
