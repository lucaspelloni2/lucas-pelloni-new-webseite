import React from "react";
import { Home } from "./Home/Home";
import { Page } from "./Page";
import { HomeTitle } from "./Home/HomeTitle";
import { SecondHomeTitle } from "./Home/SecondHomeTitle";
import { PageType } from "../types/PageType";
import { StoryIntro } from "./StoryIntro/StoryIntro";
import { ColorPicker } from "./Home/ColorPicker";
import { Circle } from "../components/Circle";
import useAppState from "../reducers/useAppState";
import { PAGE_HEIGHT } from "../Layout/Theme";

export const Pages = () => {
  const { translation } = useAppState(s => s.translation);
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
        translation={translation + PAGE_HEIGHT}
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
        translation={translation + PAGE_HEIGHT * 2}
      />
    </>
  );
};
