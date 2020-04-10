import React, { useEffect, useRef, useState } from "react";
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
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useWindowSize } from "../components/useWindowSize";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../reducers/currentPage/actions";
import useAppState from "../reducers/useAppState";
import * as Scroll from "react-scroll";
import { DefaultScrollTransition } from "./DefaultScrollTransition";

const { scroller } = Scroll;

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
`;

const BlankPage = () => <PageContainer />;

const pages = [
  PageType.HOME_FIRST,
  PageType.BLANK,
  PageType.HOME_SECOND,
  PageType.BLANK,
  PageType.STORY_START
];

type Props = {
  translation: number;
};
export const Pages = ({ translation }: Props) => {
  return (
    <>
      <ColorPicker />
      <Circle />
      <Page
        translation={translation}
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
      <Page
        translation={translation + 100}
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
      <Page
        component={<StoryIntro />}
        name={PageType.STORY_START}
        translation={translation + 200}
      />
    </>
  );
};
