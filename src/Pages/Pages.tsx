import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { Page } from "./Page";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useAppState from "../reducers/useAppState";
import { RefType } from "../reducers/scrollRefs/types";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
`;

export const Pages = () => {
  const { lastScrolledRef } = useAppState(s => s.scrollRefs);
  const viewPortHeight = window.screen.height;

  console.log(viewPortHeight);

  const homeRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastScrolledRef === RefType.STORY && storyRef?.current) {
      window.scrollTo(0, storyRef.current.offsetTop);
    }
  }, [lastScrolledRef]);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y);
  });

  return (
    <Container>
      <Page ref={homeRef} component={<Home />} />
      <Page ref={storyRef} component={<StoryIntro />} />
    </Container>
  );
};
