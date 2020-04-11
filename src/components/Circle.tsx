import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  CIRCLE_OVERFLOW,
  COLOR_TRANSITION,
  getAlphaColor,
  PAGE_HEIGHT,
  PAGE_TRANSITION,
  SPACING
} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "./useWindowSize";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// @ts-ignore
import interpolate from "interpolate-range";

type CircleProps = {
  right: number;
};

const CircleContainer = styled.div.attrs<{ left: number }>(
  ({ right }: CircleProps) => ({
    style: {
      right: `${right - CIRCLE_OVERFLOW}%`
    }
  })
)`
  position: fixed;
  z-index: -1;
  transition: ${PAGE_TRANSITION};
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

  // da 0 a 80
  // translation da 0 a 100
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const normalized = Math.abs(translation);
    if (normalized === 0) {
      setProgress(0);
    } else if (normalized === PAGE_HEIGHT) {
      setProgress(80);
    }
  }, [translation]);

  return useMemo(
    () => (
      // @ts-ignore
      <CircleContainer right={progress}>
        <MyCircle selectedColor={selectedColor} />
      </CircleContainer>
    ),
    [progress, selectedColor]
  );
};
