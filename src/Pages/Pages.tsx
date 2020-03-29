import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { Page } from "./Page";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useAppState from "../reducers/useAppState";
import { RefType } from "../reducers/scrollRefs/types";
import { PageContainer } from "../Layout/styled/PageContainer";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
`;

const BlankPage = () => <PageContainer />;

export const Pages = () => {
  const { lastScrolledRef } = useAppState(s => s.scrollRefs);
  const viewPortHeight = window.screen.height;

  console.log(viewPortHeight);

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y);
  });

  return (
    <Container>
      <Page component={<Home />} name="home" />
      <Page component={<BlankPage />} name="blank" />
      <Page component={<StoryIntro />} name="story" />
    </Container>
  );
};
