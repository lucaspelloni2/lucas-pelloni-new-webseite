import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {useNormalizedTransition} from "../hooks/useNormalizedTransition";
import {useTheme} from "../hooks/useTheme";
import {useWindowSize} from "../hooks/useWindowSize";
import {
  AnimatedOpacityContainer,
  PageDimensions,
  PAGE_TRANSITION
} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";

type CircleProps = {
  right: number;
  translation: number;
};

const CircleContainer = styled(AnimatedOpacityContainer).attrs<{
  visible: boolean;
}>(({translation}: CircleProps) => ({
  style: {
    transform: `translate(50%, ${translation}vh)`
  }
}))<{visible: boolean; translation: number}>`
  position: fixed;
  z-index: -1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  bottom: 0;
  transition: ${PAGE_TRANSITION};
  top: 0;
`;

const MyCircle = styled.div<{
  color: string;
  size: number;
}>`
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  transform: scale(1);
  transition: ${PAGE_TRANSITION};
  will-change: transform;
  background: ${props => props.color};
`;
type Props = {
  visible: boolean;
};
export const Circle = ({visible}: Props) => {
  const {height, width} = useWindowSize();
  const {selectedColor} = useAppState(s => s.selectedColor);
  const {background} = useTheme();
  const {translation} = useNormalizedTransition();
  const [circleColor, setCircleColor] = useState(selectedColor);

  const circleSize = Math.min(height, width);

  useEffect(() => {
    if (translation === PageDimensions[0]) {
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[1]) {
      setCircleColor(selectedColor);
    } else if (translation === PageDimensions[2]) {
      setCircleColor(selectedColor);
    }
  }, [background, selectedColor, translation, width]);

  return useMemo(
    () => (
      <CircleContainer visible={visible} translation={translation}>
        <MyCircle color={circleColor} size={circleSize} />
      </CircleContainer>
    ),
    [circleColor, circleSize, translation, visible]
  );
};
