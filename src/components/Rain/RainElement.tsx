import React, {useMemo} from "react";
import styled, {keyframes} from "styled-components";
import {PAGE_TRANSITION, SPACING, __COLORS} from "../../Layout/Theme";
import {Circle} from "./Circle";
import {Line} from "./Line";
import {DoubleNote, Microphone, SingleNote} from "./Music";
import {getRandomInt} from "./Rain";
import {Square} from "./Square";
import {Triangle} from "./Triangle";

type ContainerProps = {
  left: number;
  top: number;
};

const move = keyframes`
  0% {
    transform: translateY(-${SPACING / 4}px);
    opacity: 0.75;
  }
  50% {
    transform: translateY(${SPACING * 2}px);
    opacity: 1;
  }
  100% {
    transform: translateY(-${SPACING / 4}px);
    opacity: 0.75;
  }
`;

const Container = styled.div.attrs<{
  left: number;
  top: number;
  duration: number;
}>(({left, top}: ContainerProps) => ({
  style: {
    left: `${left}%`,
    top: `${top}%`
  }
}))<{duration: number; left: number; top: number}>`
  animation: ${props => props.duration}s ${move} infinite;
  position: absolute;
  transition: ${PAGE_TRANSITION};
`;

export enum RainElementType {
  TRIANGLE = "TRIANGLE",
  CIRCLE = "CIRCLE",
  SQUARE = "SQUARE",
  LINE = "LINE"
}

type Props = {
  element: RainElementType;
  left: number;
  top: number;
  duration: number;
  size: number;
  rotate?: string;
  color: string;
  isEasterEgg?: boolean;
};

const getElement = (
  element: RainElementType,
  size: number,
  color: string,
  rotate?: string,
  isEasterEgg?: boolean
) => {
  if (isEasterEgg) {
    const random = getRandomInt(0, 2);
    if (random === 0) {
      return <SingleNote color={color} size={size * 2} rotate={rotate} />;
    }
    if (random === 1) {
      return <DoubleNote color={color} size={size * 2} rotate={rotate} />;
    }
    return <Microphone color={color} size={size * 2} rotate={rotate} />;
  }
  if (element === RainElementType.TRIANGLE) {
    return <Triangle color={color} size={size} rotate={rotate} />;
  }
  if (element === RainElementType.CIRCLE) {
    return <Circle color={color} size={size} rotate={rotate} />;
  }
  if (element === RainElementType.LINE) {
    return <Line color={color} size={size} rotate={rotate} />;
  }
  if (element === RainElementType.SQUARE) {
    return <Square color={color} size={size} rotate={rotate} />;
  }
  return <Triangle color={__COLORS.TERTIARY} size={size} />;
};

export const RainElement = ({
  element,
  left,
  top,
  size,
  duration,
  color,
  rotate,
  isEasterEgg
}: Props) => {
  const el = getElement(element, size, color, rotate, isEasterEgg);

  return useMemo(
    () => (
      <Container left={left} top={top} duration={duration}>
        {el}
      </Container>
    ),
    [duration, el, left, top]
  );
};
