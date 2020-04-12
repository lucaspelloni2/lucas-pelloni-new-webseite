import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  CIRCLE_RIGHT_OVERFLOW,
  CIRCLE_TOP_OVERFLOW,
  COLOR_TRANSITION,
  getAlphaColor,
  PAGE_HEIGHT,
  PAGE_TRANSITION,
  PageDimensions,
  SPACING
} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "../hooks/useWindowSize";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
// @ts-ignore
import interpolate from "interpolate-range";

type CircleProps = {
  right: number;
};

const CircleContainer = styled.div.attrs<{ left: number }>(
  ({ right }: CircleProps) => ({
    style: {
      right: `${right - CIRCLE_RIGHT_OVERFLOW}%`
    }
  })
)`
  position: fixed;
  z-index: -1;
  transition: ${PAGE_TRANSITION};
  top: -${CIRCLE_TOP_OVERFLOW}px;
`;

const MyCircle = styled.div<{
  color: string;
  size: number;
  borderRadius: number;
}>`
  border-radius: ${props => props.borderRadius}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transition: ${PAGE_TRANSITION};
  background: ${props => props.color};
`;

export const Circle = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  const { translation } = useAppState(s => s.translation);
  const { width } = useWindowSize();

  const [right, setRight] = useState(0);
  const INITIAL_SIZE = 800;
  const [size, setSize] = useState(INITIAL_SIZE);
  const [borderRadius, setBorderRadius] = useState(50);

  useEffect(() => {
    const normalized = Math.abs(translation);
    if (normalized === PageDimensions[0]) {
      setRight(0);
    } else if (normalized === PageDimensions[1]) {
      setRight(80);
      setSize(INITIAL_SIZE);
      setBorderRadius(50);
    } else if (normalized === PageDimensions[2]) {
      setRight(CIRCLE_RIGHT_OVERFLOW);
      setSize(width || 3000);
      setBorderRadius(0);
    }
  }, [translation, width]);

  return useMemo(
    () => (
      // @ts-ignore
      <CircleContainer right={right}>
        <MyCircle
          color={selectedColor}
          size={size}
          borderRadius={borderRadius}
        />
      </CircleContainer>
    ),
    [borderRadius, right, selectedColor, size]
  );
};
