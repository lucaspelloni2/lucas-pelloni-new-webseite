import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  CIRCLE_OVERFLOW,
  COLOR_TRANSITION,
  getAlphaColor,
  PAGE_HEIGHT,
  PAGE_TRANSITION,
  PageDimensions,
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

const INITIAL_SIZE = 850;

const MyCircle = styled.div<{
  selectedColor: string;
  size: number;
}>`
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transition: ${PAGE_TRANSITION};
  background: ${props => props.selectedColor};
`;

export const Circle = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  const { translation } = useAppState(s => s.translation);
  const { height, width } = useWindowSize();

  console.log(PageDimensions);
  // da 0 a 80
  // translation da 0 a 100
  const [progress, setProgress] = useState(0);
  const [size, setSize] = useState(INITIAL_SIZE);

  useEffect(() => {
    const normalized = Math.abs(translation);
    if (normalized === PageDimensions[0]) {
      setProgress(0);
    } else if (normalized === PageDimensions[1]) {
      setProgress(80);
      setSize(INITIAL_SIZE);
    } else if (normalized === PageDimensions[2]) {
      setProgress(-240);
      setSize(INITIAL_SIZE * 12);
    } else if (normalized === PageDimensions[3]) {
      setProgress(-180);
      setSize(0);
    }
  }, [translation]);

  return useMemo(
    () => (
      // @ts-ignore
      <CircleContainer right={progress}>
        <MyCircle selectedColor={selectedColor} size={size} />
      </CircleContainer>
    ),
    [progress, selectedColor, size]
  );
};
