import React, {useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import useMedia from "use-media";
import {useWindowSize} from "react-use";
import {PageType} from "../types/PageType";
import {Circle} from "../components/Circle";
import useAppState from "../reducers/useAppState";
import {PAGE_TRANSITION, PageDimensions} from "../Layout/Theme";

import {Direction} from "../reducers/translation/types";
import {setTranslation} from "../reducers/translation/actions";
import {HistoryManager} from "../components/HistoryManager";
import {useNormalizedTransition} from "../hooks/useNormalizedTransition";
import {useImageSection} from "../hooks/useImageSection";
import {Memories} from "../Content";
import {MEDIUM_DEVICES_MAX_WIDTH} from "../Layout/Mobile";
import {useMouseWheel} from "../hooks/useMouseWheel";
import {MemoryScreen} from "./Memories/Memory";
import {Years} from "./Memories/Years";

import {StoryIntro} from "./StoryIntro/StoryIntro";
import {SecondHomeTitle} from "./Home/SecondHomeTitle";
import {HomeTitle} from "./Home/HomeTitle";
import {Page} from "./Page";
import {Home} from "./Home/Home";
import {ColorPicker} from "./Home/ColorPicker";

const Parent = styled.div<{
  translation: number;
  windowHeight: number;
  currentIndex: number;
}>`
  overflow: hidden;
  height: ${(Memories.length + 3) * 100}vh;
  width: 100%;
  position: absolute !important;
  transition: ${PAGE_TRANSITION};
  will-change: transform;
  transform: translate3d(0px, ${props => props.translation}vh, 0px);
  -webkit-transform: translate3d(
    0px,
    -${props => props.currentIndex * props.windowHeight}px,
    0px
  );
`;

export const Pages = () => {
  const {translation} = useAppState(s => s.translation);
  const windowHeight = useWindowSize().height;
  const normalized = useNormalizedTransition().translation;
  const currentIndex = useMemo(() => normalized / 100, [normalized]);
  const {isLeftPanelOpen, translatedMemories} = useAppState(s => s.memory);
  const dispatch = useDispatch();
  const {isImageSection} = useImageSection();
  const [direction, setDirection] = useState<null | string>(null);

  const isMobile = useMedia({maxWidth: MEDIUM_DEVICES_MAX_WIDTH + "px"});

  const {ref, dir} = useMouseWheel();

  console.log("direction", dir);

  /*  const { ref } = useMouseWheel({
    onScrollUp: () => {
      if (!isLeftPanelOpen && direction !== Direction.UP) {
        setDirection(Direction.UP);
      }
    },
    onScrollDown: () => {
      if (!isLeftPanelOpen && direction !== Direction.DOWN) {
        setDirection(Direction.DOWN);
      }
    }
  });*/

  /* const secondRef = useTouchDirection({
    onScrollUp: () => {
      if (!isLeftPanelOpen && direction !== Direction.UP) {
        setDirection(Direction.UP);
      }
    },
    onScrollDown: () => {
      if (!isLeftPanelOpen && direction !== Direction.DOWN) {
        setDirection(Direction.DOWN);
      }
    }
  });*/

  /*  useScrollPosition(
    props => {
      const { prevPos, currPos } = props;
      const scrollingDown = currPos.y > prevPos.y;
      if (scrollingDown && direction !== Direction.DOWN) {
        setDirection(Direction.DOWN);
      } else if (direction !== Direction.UP) {
        setDirection(Direction.UP);
      }
    },
    [],
    undefined,
    true,
    1000
  );

  useEffect(() => {
    dispatch(setTranslation(direction));
  }, [direction, dispatch]);*/

  useEffect(() => {
    dispatch(setTranslation(dir));
  }, [dir, dispatch]);

  return (
    <Parent
      ref={ref}
      translation={translation}
      windowHeight={windowHeight}
      currentIndex={currentIndex}
    >
      <HistoryManager />
      {/*  <ColorPicker visible={normalized <= PageDimensions[2]} />

      <Years visible={isImageSection} />*/}
      <Circle visible={normalized < PageDimensions[3]} />
      {useMemo(
        () => (
          <>
            <Page
              offset={0}
              component={
                <Home header order={[1, 2]} titleComponent={<HomeTitle />} />
              }
              name={PageType.HOME_FIRST}
            />
            <Page
              offset={PageDimensions[1]}
              component={
                <Home order={[2, 1]} titleComponent={<SecondHomeTitle />} />
              }
              name={PageType.HOME_SECOND}
            />

            <Page
              component={<StoryIntro />}
              offset={PageDimensions[2]}
              name={PageType.STORY_START}
            />

            {translatedMemories.map((m, i: number) => {
              const isActive = normalized === PageDimensions[3 + i];
              return (
                <Page
                  key={`memory-${m.year}-${m.month}-${i}`}
                  component={<MemoryScreen memory={m} isActive={isActive} />}
                  name={PageType.MEMORY_AXELRA}
                  offset={PageDimensions[3 + i]}
                />
              );
            })}
          </>
        ),
        [normalized, translatedMemories]
      )}
    </Parent>
  );
};
