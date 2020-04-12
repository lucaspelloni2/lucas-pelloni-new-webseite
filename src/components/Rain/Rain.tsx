import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RainElement, RainElementType } from "./RainElement";
import { getRandomColor } from "../../Layout/Theme";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: 0.3;
`;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Rain = () => {
  const [timer, setTimer] = useState(0);
  const NR_ELEMENTS = 100;
  const TIMER = 5000;
  const MIN_SIZE = 5;
  const MAX_SIZE = 45;
  const MIN_DURATION = 2;
  const MAX_DURATION = 6;
  const elements = Object.keys(RainElementType);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(t => t + 1);
    }, TIMER);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      {new Array(NR_ELEMENTS).fill(0).map((_, index: number) => {
        const randomInitialPositionX = getRandomInt(0, 100);
        const randomInitialPositionY = getRandomInt(0, 100);
        const randomDuration = getRandomInt(MIN_DURATION, MAX_DURATION);
        const randomSize = getRandomInt(MIN_SIZE, MAX_SIZE);
        const randomElement = elements[getRandomInt(0, elements.length - 1)];
        return (
          <RainElement
            color={getRandomColor()}
            duration={randomDuration}
            size={randomSize}
            element={randomElement as RainElementType}
            left={randomInitialPositionX}
            top={randomInitialPositionY}
          />
        );
      })}
    </Container>
  );
};
