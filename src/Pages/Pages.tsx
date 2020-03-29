import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { Page } from "./Page";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useAppState from "../reducers/useAppState";
import { RefType } from "../reducers/scrollRefs/types";
import { PageContainer } from "../Layout/styled/PageContainer";
import { useWindowSize } from "../components/useWindowSize";

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
  const storyRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Page
        component={<Home header order={[1, 2]} illustration={"home.png"} />}
        name="home"
      />
      <Page component={<BlankPage />} name="blank" />
      <Page
        component={<Home order={[2, 1]} illustration={"home_3.png"} />}
        name="story"
        ref={storyRef}
      />
      <Page component={<BlankPage />} name="blank" />
    </Container>
  );
};
