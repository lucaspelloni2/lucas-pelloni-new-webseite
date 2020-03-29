import React, { useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { getAlphaColor, SPACING } from "../Layout/Theme";
import { HomeColor } from "../Pages/Home/Color";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "./useWindowSize";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// @ts-ignore
import interpolate from "interpolate-range";
import { INITIAL_ANIMATION_DURATION_IN_SECONDS } from "../Layout/AnimationHelper";

const CircleContainer = styled.div<{ color: string; progress: number }>`
  position: fixed;
  z-index: -1;
  top: -${SPACING * 15}px;
  // from 60 to -15
  left: ${props => props.progress - 10}%;
  filter: ${props =>
    `drop-shadow(1px 1px 3px ${getAlphaColor(0.1, props.color)})`};
`;

const SIZE = 850;

const MyCircle = styled.div<{
  selectedColor?: string;
  color: string;
  isDarkMode: boolean;
  interval: number;
}>`
  clip-path: circle(50% at 50% 50%);
  width: ${SIZE}px;
  height: ${SIZE}px;
  transition: ${props =>
      props.selectedColor ? props.interval / 10 : props.interval / 2}ms
    ease-in-out all;
  background: ${props =>
    props.selectedColor ||
    getAlphaColor(props.isDarkMode ? 1 : 1, props.color)};
`;

type Props = {
  selectedColor: HomeColor | null;
  randomColor: string;
  interval?: number;
};

export const Circle = ({ selectedColor, randomColor, interval }: Props) => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { width, height } = useWindowSize();

  const [progress, setProgress] = useState(0);

  const numberOfPagesBetweenAnimation = 1 + 1;

  const int = interpolate({
    inputRange: [1, 0],
    outputRange: [0, 75],
    clamp: true
  });
  console.log(progress, int(progress));
  useScrollPosition(({ currPos }) => {
    if (height) {
      const animatedValue = currPos.y;
      const goal = height * numberOfPagesBetweenAnimation;
      const progress = animatedValue / goal;

      setProgress(progress);
    }
  });

  return useMemo(
    () => (
      <CircleContainer
        color={selectedColor?.background || randomColor}
        progress={int(progress * -1)}
      >
        <MyCircle
          interval={interval || 1000}
          isDarkMode={isDarkMode}
          selectedColor={selectedColor?.background}
          color={randomColor}
        />
      </CircleContainer>
    ),
    [int, interval, isDarkMode, progress, randomColor, selectedColor]
  );
};
