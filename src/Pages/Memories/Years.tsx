import React, { useMemo } from "react";
import styled from "styled-components";
import {
  AnimatedOpacityContainer,
  MEMORY_RIGHT_PANEL_WIDTH,
  PAGE_TRANSITION,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import { Memory } from "../../Content";
import { Year } from "./Year";
import { v1 } from "uuid";
import useAppState from "../../reducers/useAppState";
import { useNormalizedTransition } from "../../hooks/useNormalizedTransition";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SMALL_DEVICES } from "../../Layout/Mobile";

// https://codepen.io/bcarvalho/pen/RZqmZX
const Container = styled(AnimatedOpacityContainer).attrs(
  ({ translation }: any) => ({
    style: {
      transform: `translate(0, ${translation}vh)`
    }
  })
)<{
  visible: boolean;
  translation: number;
  offset: number;
}>`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  transition: ${PAGE_TRANSITION};
  width: ${props => (props.visible ? MEMORY_RIGHT_PANEL_WIDTH : 0)}px;
  right: 0;
  flex-direction: column;
  top: ${props => props.offset}px;
  ${SMALL_DEVICES`
    display: none;
  `}
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  const { grouped } = useAppState(s => s.memory);
  const { translation } = useNormalizedTransition();

  const { height } = useWindowSize();
  const offset = height ? height - YEAR_HEIGHT * grouped?.length : 0;

  return useMemo(
    () => (
      <Container visible={visible} translation={translation} offset={offset}>
        {grouped.map((memories: Memory[]) => {
          return (
            <Year
              key={v1()}
              year={Number(memories[0].year)}
              memories={memories}
            />
          );
        })}
      </Container>
    ),
    [grouped, offset, translation, visible]
  );
};
