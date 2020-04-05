import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { Page } from "./Page";

import { PageContainer } from "../Layout/styled/PageContainer";
import { HomeTitle } from "./Home/HomeTitle";
import { SecondHomeTitle } from "./Home/SecondHomeTitle";
import { PageType } from "../types/PageType";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { ColorPicker } from "./Home/ColorPicker";
import { Circle } from "../components/Circle";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowSize } from "../components/useWindowSize";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../reducers/currentPage/actions";
import useAppState from "../reducers/useAppState";
import * as Scroll from "react-scroll";
import { DefaultScrollTransition } from "./DefaultScrollTransition";

const { scroller } = Scroll;

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
`;

const BlankPage = () => <PageContainer />;

const pages = [
  PageType.HOME_FIRST,
  PageType.BLANK,
  PageType.HOME_SECOND,
  PageType.BLANK,
  PageType.STORY_START
];

enum Direction {
  UP = "UP",
  DOWN = "DOWN"
}
export const Pages = () => {
  const { height } = useWindowSize();
  const dispatch = useDispatch();
  const { page } = useAppState(s => s.currentPage);
  const homeSecondRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<Direction | null>(null);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const delta = Math.abs(currPos.y - prevPos.y);
      if (delta > 50 && delta < 300) {
        console.log(delta);
        if (currPos.y >= prevPos.y) {
          setDirection(Direction.DOWN);
        } else {
          setDirection(Direction.UP);
        }
        if (height) {
          const currentPageIndex = Math.floor(currPos.y / height);
          const currentPage = pages[currentPageIndex];
          if (currentPage !== PageType.BLANK) {
            dispatch(setCurrentPage(currentPage));
          }
        }
      }
    },
    [dispatch, height],
    undefined,
    true,
    300
  );

  useEffect(() => {
/*    if (page) {
      let nextPage = page;
      console.log(direction, page);
      if (direction === Direction.DOWN) {
        if (page === PageType.HOME_FIRST) {
          nextPage = PageType.HOME_SECOND;
        } else if (page === PageType.HOME_SECOND) {
          nextPage = PageType.STORY_START;
        }
      } else if (direction === Direction.UP) {
      }

      scroller.scrollTo(nextPage, {
        ...DefaultScrollTransition
      });
    }*/
  }, [scroller, page, direction]);

  return (
    <Container>
      <ColorPicker />
      <Circle />
      <Page
        component={
          <Home
            header
            order={[1, 2]}
            illustration={"lucas.svg"}
            titleComponent={<HomeTitle />}
            scrollTo={PageType.HOME_SECOND}
          />
        }
        name={PageType.HOME_FIRST}
      />
      <Page component={<BlankPage />} name={PageType.BLANK} />
      <Page
        component={
          <Home
            order={[2, 1]}
            illustration={"lucas.svg"}
            titleComponent={<SecondHomeTitle />}
            scrollTo={PageType.STORY_START}
          />
        }
        ref={homeSecondRef}
        name={PageType.HOME_SECOND}
      />
      <Page component={<BlankPage />} name={PageType.BLANK} />
      <Page component={<StoryIntro />} name={PageType.STORY_START} />
    </Container>
  );
};
