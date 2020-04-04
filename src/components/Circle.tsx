import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { COLOR_TRANSITION, getAlphaColor, SPACING } from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "./useWindowSize";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// @ts-ignore
import interpolate from "interpolate-range";

type CircleProps = {
  left: number;
};

const CircleContainer = styled.div.attrs<{ left: number }>(
  ({ left }: CircleProps) => ({
    style: {
      left: `${left - 10}%`
    }
  })
)`
  position: fixed;
  z-index: -1;
  top: -${SPACING * 15}px;
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
      // @ts-ignore
      <CircleContainer left={int(progress * -1)}>
        <MyCircle selectedColor={selectedColor} />
      </CircleContainer>
    ),
    [int, progress, selectedColor]
  );
};
