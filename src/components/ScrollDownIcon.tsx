import React, { useCallback } from "react";
import styled, { css, keyframes } from "styled-components";
import { DARK_MODE_TRANSITION, SPACING } from "../Layout/Theme";
import { Icon, IconTypes } from "./Icon";
import { useTextColor } from "../Layout/useTextColor";

const SIZE = SPACING * 6;

const move = keyframes`
    0% {
      transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    } 50% {
     transform: translateY(${SPACING / 2}px);
     opacity: 1;
    } 100% {
     transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    }
`;

const Circle = styled.div<{ color: string }>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  padding: ${SPACING * 1.5}px;
  justify-content: center;
  transition: ${DARK_MODE_TRANSITION};
  position: absolute;
  left: -${SIZE / 2}px;
  z-index: 100;
  bottom: ${SPACING * 4}px;
  border: 1px solid ${props => props.color};
  align-items: center;
  cursor: pointer;
`;

const MyIcon = styled(Icon)`
  animation: 1.5s ${move} infinite;
`;

type Props = {
  onClick: () => void;
};
export const ScrollDownIcon = ({ onClick }: Props) => {
  const { color } = useTextColor();
  const callback = useCallback(() => onClick(), [onClick]);
  return (
    <Circle color={color} onClick={callback}>
      <MyIcon
        color={color}
        name={IconTypes.ARROW_DOWN}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </Circle>
  );
};
