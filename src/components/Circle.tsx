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
  circleXTranslation: number;
  translation: number;
};

type Props = {
  visible: boolean;
};

const OVERFLOW = 5;
const CircleContainer = styled(AnimatedOpacityContainer).attrs<{
  visible: boolean;
}>(() => ({
  style: {
    /* transform: `translate3d(${circleXTranslation}%, ${translation}vh,0)`*/
  }
}))<Props>`
  position: fixed;
  z-index: -1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  bottom: 0;
  top: 0;
`;

const MyCircle = styled.div<
  {
    color: string;
    size: number;
    scale: number;
  } & CircleProps
>`
  transition: ${PAGE_TRANSITION};
  border-radius: ${props => (props.scale === 1 ? "50" : "%")}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  will-change: transform;
  transform: ${props =>
      `translate3d(${props.circleXTranslation}%, ${props.translation}vh,0)`}
    ${props => `scale(${props.scale})`};
  background: ${props => props.color};
`;
export const Circle = ({visible}: Props) => {
  const {height, width} = useWindowSize();
  const {selectedColor} = useAppState(s => s.selectedColor);
  const {background} = useTheme();
  const {translation} = useNormalizedTransition();
  const [circleColor, setCircleColor] = useState(selectedColor);
  const [circleXTranslation, setCircleXTranslation] = useState(50);
  const [circleScale, setCircleScale] = useState(1);
  const circleSize = useMemo(() => Math.min(height, width), [height, width]);
  const maxSize = useMemo(() => Math.max(height, width), [height, width]);

  useEffect(() => {
    if (translation === PageDimensions[0]) {
      setCircleColor(selectedColor);
      setCircleScale(1);
      setCircleXTranslation(50);
    } else if (translation === PageDimensions[1]) {
      setCircleColor(selectedColor);
      setCircleXTranslation(-50);
      setCircleScale(1);
    } else if (translation === PageDimensions[2]) {
      setCircleColor(selectedColor);
      setCircleScale(2 + Math.round(maxSize / circleSize));
    }
  }, [background, circleSize, maxSize, selectedColor, translation, width]);

  return (
    <CircleContainer visible={visible}>
      <MyCircle
        color={circleColor}
        size={circleSize}
        scale={circleScale}
        translation={translation}
        circleXTranslation={circleXTranslation}
      />
    </CircleContainer>
  );
};
