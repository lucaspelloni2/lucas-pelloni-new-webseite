import React, { useEffect, useMemo, useState } from "react";
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
import { Slider } from "../components/Slider";
import { MemoryScreen } from "./Memories/Memory";
import { Years } from "./Memories/Years";
import { useNormalizedTransition } from "../hooks/useNormalizedTransition";
import { useImageSection } from "../hooks/useImageSection";

const Parent = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Pages = () => {
  const { translation } = useAppState(s => s.translation);
  const normalized = useNormalizedTransition().translation;
  const { isLeftPanelOpen, translatedMemories } = useAppState(s => s.memory);
  const dispatch = useDispatch();
  const { isImageSection } = useImageSection();
  const [direction, setDirection] = useState<null | Direction>(null);

  const { ref } = useMouseWheel({
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
      {normalized <= PageDimensions[2] && <ColorPicker />}
      {normalized === PageDimensions[2] && <Slider />}
      {normalized < PageDimensions[3] && <Circle />}
      {useMemo(
        () => (
          <Years visible={isImageSection} />
        ),
        [isImageSection]
      )}

      {useMemo(
        () => (
          <>
            {!isImageSection && (
              <Page
                translation={translation}
                component={
                  <Home header order={[1, 2]} titleComponent={<HomeTitle />} />
                }
                name={PageType.HOME_FIRST}
              />
            )}
            {!isImageSection && (
              <Page
                translation={translation + PageDimensions[1]}
                component={
                  <Home order={[2, 1]} titleComponent={<SecondHomeTitle />} />
                }
                name={PageType.HOME_SECOND}
              />
            )}

            {normalized < PageDimensions[4] && (
              <Page
                component={
                  <StoryIntro isActive={normalized === PageDimensions[2]} />
                }
                name={PageType.STORY_START}
                translation={translation + PageDimensions[2]}
              />
            )}

            {[
              ...translatedMemories,
              ...translatedMemories,
              ...translatedMemories
            ].map((m, i: number) => {
              const isActive = normalized === PageDimensions[3 + i];
              const pageTranslation = translation + PageDimensions[3 + i];
              return (
                <Page
                  key={`memory-${m.year}-${m.month}-${i}`}
                  component={<MemoryScreen memory={m} isActive={isActive} />}
                  name={PageType.MEMORY_AXELRA}
                  translation={pageTranslation}
                />
              );
            })}
          </>
        ),
        [isImageSection, normalized, translatedMemories, translation]
      )}
    </Parent>
  );
};
