import React, { memo, useEffect, useMemo } from "react";
import styled from "styled-components";
import { RainElement, RainElementType } from "./RainElement";
import { getRandomColor } from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";
import { useDispatch } from "react-redux";
import { shuffle } from "../../reducers/shuffle/actions";

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
  const dispatch = useDispatch();
  const NR_ELEMENTS = timer;
  const TIMER = 15000;
  const MIN_SIZE = 10;
  const MAX_SIZE = 50;
  const MIN_DURATION = 2;
  const MAX_DURATION = 6;
  const elements = Object.keys(RainElementType);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(shuffle());
    }, TIMER);
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <Container opacity={value / 100}>
      {useMemo(
        () =>
          new Array(NR_ELEMENTS).fill(0).map(_ => {
            const randomInitialPositionX = getRandomInt(0, 100);
            const randomInitialPositionY = getRandomInt(0, 100);
            const randomDuration = getRandomInt(MIN_DURATION, MAX_DURATION);
            const randomSize = getRandomInt(MIN_SIZE, MAX_SIZE);
            const randomRotation = getRandomInt(0, 360);
            const randomElement =
              elements[getRandomInt(0, elements.length - 1)];
            return (
              <RainElement
                color={getRandomColor()}
                duration={randomDuration}
                size={randomSize}
                rotate={String(randomRotation)}
                isEasterEgg={NR_ELEMENTS === 100}
                element={randomElement as RainElementType}
                left={randomInitialPositionX}
                top={randomInitialPositionY}
              />
            );
          }),
        [NR_ELEMENTS, elements]
      )}
    </Container>
  );
});
