import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Triangle } from "./Triangle";
import { __COLORS, PAGE_TRANSITION, SPACING } from "../../Layout/Theme";
import { Circle } from "./Circle";
import { Line } from "./Line";
import { Square } from "./Square";

type ContainerProps = {
  left: number;
  top: number;
};

const move = keyframes`
    0% {
      transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    } 50% {
     transform: translateY(${SPACING * 2}px);
     opacity: 1;
    } 100% {
     transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    }
`;

const Container = styled.div.attrs<{
  left: number;
  top: number;
  duration: number;
}>(({ left, top }: ContainerProps) => ({
  style: {
    left: `${left}%`,
    top: `${top}%`
  }
}))`
  // @ts-ignore
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
  color: string;
};

const getElement = (element: RainElementType, size: number, color: string) => {
  if (element === RainElementType.TRIANGLE) {
    return <Triangle color={color} size={size} />;
  } else if (element === RainElementType.CIRCLE) {
    return <Circle color={color} size={size} />;
  } else if (element === RainElementType.LINE) {
    return <Line color={color} size={size} />;
  } else if (element === RainElementType.SQUARE) {
    return <Square color={color} size={size} />;
  }
  return <Triangle color={__COLORS.TERTIARY} size={size} />;
};

export const RainElement = ({ element, left, top, size, duration, color }: Props) => {
  const el = getElement(element, size, color);

  return (
    // @ts-ignore
    <Container left={left} top={top} duration={duration}>
      {el}
    </Container>
  );
};
