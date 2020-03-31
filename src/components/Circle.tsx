import React, { useMemo, useState } from "react";
import styled  from "styled-components";
import { COLOR_TRANSITION, getAlphaColor, SPACING } from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "./useWindowSize";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// @ts-ignore
import interpolate from "interpolate-range";


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
  selectedColor: string;
}>`
  clip-path: circle(50% at 50% 50%);
  width: ${SIZE}px;
  height: ${SIZE}px;
  transition: ${COLOR_TRANSITION};
  background: ${props => props.selectedColor};
`;

export const Circle = () => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { selectedColor } = useAppState(s => s.selectedColor);
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
      <CircleContainer color={selectedColor} progress={int(progress * -1)}>
        <MyCircle selectedColor={selectedColor} />
      </CircleContainer>
    ),
    [int, progress, selectedColor]
  );
};
