import React from "react";
import styled from "styled-components";
import { getAlphaColor, SPACING } from "../Layout/Theme";
import { HomeColor } from "../Pages/Home/Color";
import useAppState from "../reducers/useAppState";

const CircleContainer = styled.div<{ color: string }>`
  position: fixed;
  top: -${SPACING * 15}px;
  right: -${SPACING * 15}px;
  filter: ${props =>
    `drop-shadow(6px 10px 8px ${getAlphaColor(0.3, props.color)})`};
`;

const SIZE = 850;

const MyCircle = styled.div<{
  selectedColor?: string;
  color: string;
  isDarkMode: boolean;
  interval: number;
}>`
  clip-path: circle(50% at 50% 50%);
  width: ${SIZE}px;
  height: ${SIZE}px;
  transition: ${props =>
      props.selectedColor ? props.interval / 10 : props.interval / 2}ms
    ease-in-out all;
  background: ${props =>
    props.selectedColor ||
    getAlphaColor(props.isDarkMode ? 1 : 1, props.color)};
`;

type Props = {
  selectedColor: HomeColor | null;
  randomColor: string;
  interval?: number;
};

export const Circle = ({ selectedColor, randomColor, interval }: Props) => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  return (
    <CircleContainer color={selectedColor?.background || randomColor}>
      <MyCircle
        interval={interval || 1000}
        isDarkMode={isDarkMode}
        selectedColor={selectedColor?.background}
        color={randomColor}
      />
    </CircleContainer>
  );
};
