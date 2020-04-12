import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RainElement, RainElementType } from "./RainElement";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  opacity: 0.2;
`;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Rain = () => {
  const NR_ELEMENTS = 100;
  const MAX_DURATION = 4;

  return (
    <Container>
      {new Array(NR_ELEMENTS).fill(0).map((_, index: number) => {
        const randomInitialPositionX = getRandomInt(0, 95);
        const randomInitialPositionY = getRandomInt(0, 95);
        const randomDuration = getRandomInt(2, 4);
        const randomSize = getRandomInt(5, 40);
        return (
          <RainElement
            duration={randomDuration}
            size={randomSize}
            element={RainElementType.TRIANGLE}
            left={randomInitialPositionX}
            top={randomInitialPositionY}
          />
        );
      })}
    </Container>
  );
};
