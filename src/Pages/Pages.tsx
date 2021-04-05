import React, {useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {Circle} from "../components/Circle";
import {HistoryManager} from "../components/HistoryManager";
import {Memories} from "../Content";
import {useMouseWheel} from "../hooks/useMouseWheel";
import {useNormalizedTransition} from "../hooks/useNormalizedTransition";
import {
  NUMBER_OF_PAGES_WITHOUT_MEMORY,
  PageDimensions,
  PAGE_TRANSITION
} from "../Layout/Theme";
import {setCurrentMemory} from "../reducers/memory/actions";
import {setTranslation} from "../reducers/translation/actions";
import useAppState from "../reducers/useAppState";
import {Home} from "./Home/Home";
import {HomeTitle} from "./Home/HomeTitle";
import {SecondHomeTitle} from "./Home/SecondHomeTitle";
import {MemoryScreen} from "./Memories/Memory";
import {Years} from "./Memories/Years";
import {Page} from "./Page";
import {StoryIntro} from "./StoryIntro/StoryIntro";

const Parent = styled.div<{
  translation: number;
}>`
  overflow: hidden;
  width: 100%;
  position: absolute !important;
  transition: ${PAGE_TRANSITION};
  height: ${(Memories.length + NUMBER_OF_PAGES_WITHOUT_MEMORY) * 100}vh;
  will-change: transform;
  transform: translate3d(0px, ${props => props.translation}vh, 0px);
`;

const Mask = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: red;
  z-index: 124912491924;
`;

export const Pages = () => {
  const {translation} = useAppState(s => s.translation);
  const normalized = useNormalizedTransition().translation;
  const {translatedMemories} = useAppState(s => s.memory);
  const dispatch = useDispatch();
  const {ref, dir} = useMouseWheel();

  /**
   * Setting current translation based on mouse wheel action
   */
  useEffect(() => {
    dispatch(setTranslation(dir));
  }, [dir, dispatch]);

  /**
   * Setting current memory based on translation
   */
  useEffect(() => {
    const currentMemory = translatedMemories.find(
      m => m.translation === normalized
    );
    if (currentMemory) {
      dispatch(setCurrentMemory(currentMemory));
    }
  }, [dispatch, normalized, translatedMemories]);

  return (
    <Mask>
      <Parent ref={ref} translation={translation}>
        <HistoryManager />
        {/*  <ColorPicker visible={normalized <= PageDimensions[2]} />

      */}
        <Years visible />
        <Circle visible={normalized < PageDimensions[3]} />
        {useMemo(
          () => (
            <>
              <Page
                offset={0}
                component={
                  <Home order={[1, 2]} titleComponent={<HomeTitle />} />
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
                return (
                  <Page
                    key={String(`memory-${m.year}-${m.month}-${i}`)}
                    component={<MemoryScreen memory={m} />}
                    offset={m.translation as number}
                  />
                );
              })}
            </>
          ),
          [translatedMemories]
        )}
      </Parent>
    </Mask>
  );
};
