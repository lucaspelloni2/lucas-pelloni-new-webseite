import React, {useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import {useWindowSize} from "react-use";
import styled from "styled-components";
import useMedia from "use-media";
import {Circle} from "../components/Circle";
import {HistoryManager} from "../components/HistoryManager";
import {Memories} from "../Content";
import {useImageSection} from "../hooks/useImageSection";
import {useMouseWheel} from "../hooks/useMouseWheel";
import {useNormalizedTransition} from "../hooks/useNormalizedTransition";
import {MEDIUM_DEVICES_MAX_WIDTH} from "../Layout/Mobile";
import {PageDimensions, PAGE_TRANSITION} from "../Layout/Theme";
import {setTranslation} from "../reducers/translation/actions";
import useAppState from "../reducers/useAppState";
import {Home} from "./Home/Home";
import {HomeTitle} from "./Home/HomeTitle";
import {SecondHomeTitle} from "./Home/SecondHomeTitle";
import {MemoryScreen} from "./Memories/Memory";
import {Page} from "./Page";
import {StoryIntro} from "./StoryIntro/StoryIntro";

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
            />
            <Page
              offset={PageDimensions[1]}
              component={
                <Home order={[2, 1]} titleComponent={<SecondHomeTitle />} />
              }
            />
            <Page component={<StoryIntro />} offset={PageDimensions[2]} />
            {translatedMemories.map((m, i: number) => {
              const translate = PageDimensions[3 + i];
              const isActive = normalized === translate;
              return (
                <Page
                  key={String(`memory-${m.year}-${m.month}-${i}`)}
                  component={<MemoryScreen memory={m} isActive={isActive} />}
                  offset={translate}
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
