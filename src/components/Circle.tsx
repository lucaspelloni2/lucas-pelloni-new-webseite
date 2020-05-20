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
  ${MEDIUM_DEVICES`
      left: -150px;
  `}
`;

const MyCircle = styled.div<{
  color: string;
  size: number;
  scale: number;
}>`
  border-radius: 50%;
  width: 50vw;
  height: 50vw;
  transform: scale(${props => props.scale});
  transition: ${PAGE_TRANSITION};
  will-change: transform;
  background: ${props => props.color};
  ${MEDIUM_DEVICES`
      width: 500px;
      height: 500px;
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
  const [circleColor, setCircleColor] = useState(selectedColor);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (translation === PageDimensions[0]) {
      setRight(80);
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[1]) {
      setRight(0);
      setScale(1);
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[2]) {
      setScale(3.5);
      setRight(CIRCLE_RIGHT_OVERFLOW);
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
        <MyCircle color={circleColor} size={INITIAL_SIZE} scale={scale} />
      </CircleContainer>
    ),
    [circleColor, right, scale, translation, visible]
  );
};
