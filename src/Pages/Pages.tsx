import React, { useRef } from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { Page } from "./Page";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
`;

export const Pages = () => {
  const viewPortHeight = window.screen.height;
  console.log(viewPortHeight);

  const homeRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

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
