import React, { useRef } from "react";
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
        name={PageType.HOME_SECOND}
      />
      <Page component={<BlankPage />} name={PageType.BLANK} />
      <Page component={<StoryIntro />} name={PageType.STORY_START} />
    </Container>
  );
};
