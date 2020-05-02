import React, { memo, useMemo } from "react";
import styled from "styled-components";
import { RainElement, RainElementType } from "./RainElement";
import { getRandomColor } from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";
import { EASTER_EGG_LIMIT } from "../../reducers/shuffle/reducer";

const Container = styled.div<{ opacity: number }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: ${props => props.opacity};
`;

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const Rain = memo(() => {
  const { value } = useAppState(s => s.slider);
  const { timer } = useAppState(s => s.shuffle);

  const NR_ELEMENTS = timer;

  const MIN_SIZE = 10;
  const MAX_SIZE = 50;
  const MIN_DURATION = 2;
  const MAX_DURATION = 6;
  const elements = Object.keys(RainElementType);

  return useMemo(
    () => (
      <Container opacity={value / 100}>
        {new Array(NR_ELEMENTS).fill(0).map((_, i: number) => {
          const randomInitialPositionX = getRandomInt(0, 100);
          const randomInitialPositionY = getRandomInt(0, 100);
          const randomDuration = getRandomInt(MIN_DURATION, MAX_DURATION);
          const randomSize = getRandomInt(MIN_SIZE, MAX_SIZE);
          const randomRotation = getRandomInt(0, 360);
          const randomElement = elements[getRandomInt(0, elements.length - 1)];
          const color = getRandomColor();
          return (
            <RainElement
              key={`rain-element-${i}`}
              color={color}
              duration={randomDuration}
              size={randomSize}
              rotate={String(randomRotation)}
              isEasterEgg={NR_ELEMENTS === EASTER_EGG_LIMIT}
              element={randomElement as RainElementType}
              left={randomInitialPositionX}
              top={randomInitialPositionY}
            />
          );
        })}
      </Container>
    ),
    [NR_ELEMENTS, elements, value]
  );
});
