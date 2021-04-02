import {Flex} from "axelra-styled-bootstrap-grid";
import React from "react";
import styled, {css} from "styled-components";
import {useMemory} from "../../hooks/use-memory";
import {CIRCLE, getAlphaColor, SPACING, __COLORS} from "../../Layout/Theme";

const DOT_SIZE = 14;
const BAR_WIDTH = DOT_SIZE * 5;

const shared = css`
  cursor: pointer;
  margin: 0 ${SPACING / 2}px;
  background-color: ${getAlphaColor(0.5, __COLORS.WHITE)};
`;

const ActiveBar = styled.div`
  ${shared};
  width: ${BAR_WIDTH}px;
  height: ${DOT_SIZE}px;
  border-radius: ${DOT_SIZE / 2}px;
`;

const InactiveDot = styled.div`
  ${shared};
  ${CIRCLE(DOT_SIZE)};
`;

type Props = {
  active: boolean;
};

export const MemoryAnimatedDot = ({active}: Props) => {
  const {memory} = useMemory();
  return (
    <Flex align="center" row>
      {active ? <ActiveBar></ActiveBar> : <InactiveDot />}
    </Flex>
  );
};
