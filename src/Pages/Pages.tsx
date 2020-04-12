import React, { useEffect, useState } from "react";
import { Home } from "./Home/Home";
import { Page } from "./Page";
import { HomeTitle } from "./Home/HomeTitle";
import { SecondHomeTitle } from "./Home/SecondHomeTitle";
import { PageType } from "../types/PageType";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { ColorPicker } from "./Home/ColorPicker";
import { Circle } from "../components/Circle";
import useAppState from "../reducers/useAppState";
import { PageDimensions } from "../Layout/Theme";
import { useMouseWheel } from "../hooks/useMouseWheel";
import { Direction } from "../reducers/translation/types";
import { setTranslation } from "../reducers/translation/actions";
import { useDispatch } from "react-redux";
import { HistoryManager } from "../components/HistoryManager";
import styled from "styled-components";

const Parent = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Pages = () => {
  const { translation } = useAppState(s => s.translation);
  const dispatch = useDispatch();
  const [direction, setDirection] = useState<null | Direction>(null);
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
      <HistoryManager />
      <ColorPicker />
      <Circle />
      <Page
        translation={translation}
        component={
          <Home
            header
            order={[1, 2]}
            illustration={"lucas.svg"}
            titleComponent={<HomeTitle />}
          />
        }
        name={PageType.HOME_FIRST}
      />
      <Page
        translation={translation + PageDimensions[1]}
        component={
          <Home
            order={[2, 1]}
            illustration={"lucas.svg"}
            titleComponent={<SecondHomeTitle />}
          />
        }
        name={PageType.HOME_SECOND}
      />
      <Page
        component={<StoryIntro />}
        name={PageType.STORY_START}
        translation={translation + PageDimensions[2]}
      />
    </Parent>
  );
};
