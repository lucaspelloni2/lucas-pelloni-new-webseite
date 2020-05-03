import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  CIRCLE_RIGHT_OVERFLOW,
  CIRCLE_TOP_OVERFLOW,
  PAGE_TRANSITION,
  PageDimensions
} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import { useNormalizedTransition } from "../hooks/useNormalizedTransition";

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
  const { background } = useTheme();
  const { translation } = useNormalizedTransition();
  const { width } = useWindowSize();

  const [right, setRight] = useState(0);
  const INITIAL_SIZE = 800;
  const [size, setSize] = useState(INITIAL_SIZE);
  const [borderRadius, setBorderRadius] = useState(50);
  const [circleColor, setCircleColor] = useState(selectedColor);

  useEffect(() => {
    if (translation === PageDimensions[0]) {
      setRight(0);
    } else if (translation === PageDimensions[1]) {
      setRight(75);
      setSize(INITIAL_SIZE);
      setBorderRadius(50);
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[2]) {
      setRight(CIRCLE_RIGHT_OVERFLOW);
      setCircleColor(background);
      setSize(width || 3000);
      setBorderRadius(0);
    } else {
      setSize(0);
    }
  }, [background, selectedColor, translation, width]);

  return useMemo(
    () => (
      // @ts-ignore
      <CircleContainer right={right}>
        <MyCircle color={circleColor} size={size} borderRadius={borderRadius} />
      </CircleContainer>
    ),
    [borderRadius, circleColor, right, size]
  );
};
