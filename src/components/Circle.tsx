import React, { useEffect, useMemo, useState } from "react";
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
  const { selectedColor } = useAppState(s => s.selectedColor);
  const { translation } = useAppState(s => s.translation);
  const { height } = useWindowSize();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(translation);
  }, [translation]);

  return useMemo(
    () => (
      // @ts-ignore
      <CircleContainer left={progress}>
        <MyCircle selectedColor={selectedColor} />
      </CircleContainer>
    ),
    [progress, selectedColor]
  );
};
