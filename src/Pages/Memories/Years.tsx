import React, { useMemo } from "react";
import styled from "styled-components";
import {
  DARK_MODE_TRANSITION,
  MEMORY_RIGHT_PANEL_WIDTH,
  PAGE_TRANSITION_LINEAR
} from "../../Layout/Theme";
import { Memory } from "../../Content";
import { Year } from "./Year";
import { v1 } from "uuid";
import useAppState from "../../reducers/useAppState";

// https://codepen.io/bcarvalho/pen/RZqmZX
const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? 3 : -10)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: ${DARK_MODE_TRANSITION};
  width: ${props => (props.visible ? MEMORY_RIGHT_PANEL_WIDTH : 0)}px;
  right: 0;
  flex-direction: column;
  bottom: 0;
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  const { grouped } = useAppState(s => s.memory);

  return useMemo(
    () => (
      <Container visible={visible}>
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
    [grouped, visible]
  );
};
