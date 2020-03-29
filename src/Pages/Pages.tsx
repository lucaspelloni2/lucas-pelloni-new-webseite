import React from "react";
import styled from "styled-components";
import { Home } from "./Home/Home";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { Page } from "./Page";

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scroll-snap-type: y proximity;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100vh;
`;

export const Pages = () => {
  return (
    <Container>
      <Page component={<Home />} />
      <Page component={<StoryIntro />} />
    </Container>
  );
};
