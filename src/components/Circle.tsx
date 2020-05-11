import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  AnimatedOpacityContainer,
  CIRCLE_RIGHT_OVERFLOW,
  CIRCLE_TOP_OVERFLOW,
  PAGE_TRANSITION,
  PageDimensions
} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import { useNormalizedTransition } from "../hooks/useNormalizedTransition";
import { MEDIUM_DEVICES } from "../Layout/Mobile";

type CircleProps = {
  right: number;
  translation: number;
};

const CircleContainer = styled(AnimatedOpacityContainer).attrs<{
  left: number;
  visible: boolean;
}>(({ right, translation }: CircleProps) => ({
  style: {
    transform: `translate(${right - CIRCLE_RIGHT_OVERFLOW}vw, ${translation}vh)`
  }
}))`
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
  width: 800px;
  transform: scale(${props => (props.borderRadius === 0 ? 5 : 1)});
  height: 800px;
  transition: ${PAGE_TRANSITION};
  background: ${props => props.color};
  ${MEDIUM_DEVICES`
      width: 400px;
      height: 400px;
  `}
`;
type Props = {
  visible: boolean;
};
export const Circle = ({ visible }: Props) => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  const { background } = useTheme();
  const { translation } = useNormalizedTransition();
  const { width } = useWindowSize();

  const [right, setRight] = useState(80);
  const INITIAL_SIZE = 800;
  const [size, setSize] = useState(INITIAL_SIZE);
  const [borderRadius, setBorderRadius] = useState(50);
  const [circleColor, setCircleColor] = useState(selectedColor);

  useEffect(() => {
    if (translation === PageDimensions[0]) {
      setRight(80);
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[1]) {
      setRight(0);
      setBorderRadius(50);
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[2]) {
      setRight(CIRCLE_RIGHT_OVERFLOW);
      setCircleColor(background);
      setBorderRadius(0);
    }
  }, [background, selectedColor, translation, width]);

  return useMemo(
    () => (
      <CircleContainer
        // @ts-ignore
        right={right}
        visible={visible}
        translation={translation}
      >
        <MyCircle color={circleColor} size={size} borderRadius={borderRadius} />
      </CircleContainer>
    ),
    [borderRadius, circleColor, right, size, visible]
  );
};
