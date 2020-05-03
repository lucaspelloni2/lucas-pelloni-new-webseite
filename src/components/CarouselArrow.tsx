import React, {useCallback} from "react";
import styled from "styled-components";
import {Memory} from "../Content";
import {Icon, IconTypes} from "./Icon";
import {__COLORS, getHSLA, SPACING} from "../Layout/Theme";

const SIZE = 45;

const Container = styled.div<{ background: string }>`
  &:hover {
    background: ${props => getHSLA(0.6, __COLORS.WHITE || props.background)};
  }
  transition: 0.15s ease-in-out all;
  cursor: pointer;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  border: 1px solid ${getHSLA(0.4, __COLORS.WHITE)};
  background: ${props => getHSLA(0.3, __COLORS.WHITE || props.background)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${SPACING * 1.5}px;
  z-index: 9;
  margin: ${SPACING * 3}px;
`;

const Arrow = styled(Icon)`
  width: 100%;
  height: 100%;
`;

type Props = {
  memory: Memory;
  left?: boolean;
  onClick: () => void;
};

export const CarouselArrow = ({ memory, left, onClick }: Props) => {
  const click = useCallback(() => onClick(), [onClick]);

  return (
    <Container background={memory.primaryColor} onClick={click}>
      <Arrow
        name={left ? IconTypes.CHEVRON_LEFT : IconTypes.CHEVRON_RIGHT}
        color={__COLORS.WHITE || memory.primaryColor}
      />
    </Container>
  );
};
