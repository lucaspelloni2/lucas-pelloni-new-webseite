import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HomeTitle } from "./HomeTitle";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { Illustration } from "../../components/Illustrations";
import { __COLORS, getAlphaColor, SPACING } from "../../Layout/Theme";
import { useInterval } from "../../components/useInterval";
import { ColorPicker } from "./ColorPicker";
import { v1 as uuidv1 } from "uuid";
import { HomeColor } from "./Color";
import {
  fadeIn,
  INITIAL_ANIMATION_DURATION_IN_SECONDS,
  slideLeft
} from "../../Layout/AnimationHelper";
import { Header } from "../../components/Header";
import useAppState from "../../reducers/useAppState";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { useDispatch } from "react-redux";

import * as Scroll from "react-scroll";
import { DefaultScrollTransition } from "../DefaultScrollTransition";
import { Circle } from "../../components/Circle";
const { scroller } = Scroll;

const Container = styled(PageContainer)`
  flex-direction: row;
`;

const TextContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${SPACING * 2}px ${SPACING * 5}px;
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${fadeIn} forwards;
  order: ${props => props.order};
`;

const IllustrationContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  order: ${props => props.order};
`;

const Image = styled(Illustration)`
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${slideLeft} forwards;
  max-width: 600px;
  height: auto;
  transition: 1s ease-in-out all;
  padding: ${SPACING * 2}px;
  position: absolute;
`;

const INTERVAL = 5000;

const colors = [__COLORS.SECONDARY, __COLORS.FIFTH, __COLORS.TERTIARY];

type Props = {
  header?: boolean;
  order: number[];
  illustration: string;
};

export const Home = ({ header, order, illustration }: Props) => {
  const [randomColor, setRandomColor] = useState(colors[0]);
  const dispatch = useDispatch();
  const { isDarkMode } = useAppState(s => s.darkMode);
  const [selectedColor, setColor] = useState<null | HomeColor>(null);
  const homeColors = colors.map(c => ({ background: c, id: uuidv1() }));
  const [hover, setHover] = useState(false);

  useInterval(() => {
    const nextIndex = (colors.indexOf(randomColor) + 1) % colors.length;
    setRandomColor(colors[nextIndex]);
  }, INTERVAL);

  useEffect(() => {
    if (!hover) {
      setColor(null);
    }
  }, [hover]);

  return (
    <Container>
      {hover && (
        <ColorPicker
          onMouseEnter={() => setHover(true)}
          onSelectColor={(id: string) =>
            setColor(homeColors.filter(h => h.id === id)[0])
          }
          colors={homeColors}
        />
      )}
      <Circle
        randomColor={randomColor}
        selectedColor={selectedColor}
        interval={INTERVAL}
      />
      <TextContainer flex={1} order={order[0]}>
        {header && <Header />}
        <FlexBox flex={1} />
        <HomeTitle selectedColor={selectedColor?.background} />
      </TextContainer>

      <IllustrationContainer
        flex={1}
        order={order[1]}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image name={illustration} />
        {header && (
          <ScrollDownIcon
            onClick={() => {
              scroller.scrollTo("story", {
                ...DefaultScrollTransition
              });
            }}
          />
        )}
      </IllustrationContainer>
    </Container>
  );
};
