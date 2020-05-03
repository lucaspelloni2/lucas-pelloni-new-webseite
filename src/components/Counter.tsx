import React, { useEffect } from "react";
import styled from "styled-components";
import useAppState from "../reducers/useAppState";
import { CIRCLE_TRANSITION, SPACING } from "../Layout/Theme";
import {
  fadeIn,
  INITIAL_ANIMATION_DURATION_IN_SECONDS
} from "../Layout/AnimationHelper";
import { useIncrementalAnimation } from "../hooks/useIncrementalAnimation";

const Container = styled.div`
  position: absolute;
  left: -${SPACING * 3.5}px;
  margin-top: ${SPACING / 2}px;
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${fadeIn} forwards;
`;

const Label = styled.span`
  font-weight: bold;
  opacity: 0;
  transition: ${CIRCLE_TRANSITION};
`;

export const Counter = () => {
  const { timer } = useAppState(s => s.shuffle);
  const { animation } = useIncrementalAnimation();

  useEffect(() => {}, [timer]);
  return (
    <Container>
      <Label style={{ animation }}>+{timer}</Label>
    </Container>
  );
};
