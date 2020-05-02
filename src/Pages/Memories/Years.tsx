import React from "react";
import styled from "styled-components";
import {
  __COLORS,
  __GRAY_SCALE,
  getAlphaColor,
  MEMORY_LEFT_PANEL_WIDTH,
  PAGE_TRANSITION
} from "../../Layout/Theme";
import { Memories, Memory } from "../../Content";
import _ from "lodash";
import { Year } from "./Year";
import { v1 } from "uuid";
import useAppState from "../../reducers/useAppState";

// https://codepen.io/bcarvalho/pen/RZqmZX
const Container = styled.div<{ visible: boolean }>`
  height: 100%;
  position: fixed;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? 3 : -10)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: ${PAGE_TRANSITION};
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
  right: 0;
  flex-direction: column;
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  const { grouped } = useAppState(s => s.year);

  return (
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
  );
};
