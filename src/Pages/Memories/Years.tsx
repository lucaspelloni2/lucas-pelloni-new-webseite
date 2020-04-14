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
import { useTheme } from "../../hooks/useTheme";

// https://codepen.io/bcarvalho/pen/RZqmZX
const Container = styled.div<{ visible: boolean; background: string }>`
  background: ${props => getAlphaColor(0.8, props.background)};
  height: 100%;
  position: fixed;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? 3 : -10)};
  justify-content: center;
  align-items: center;
  transition: ${PAGE_TRANSITION};
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  const { background } = useTheme();
  const groupedItems = _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value();

  return (
    <Container visible={visible} background={background}>
      {groupedItems.map((memories: Memory[]) => {
        return (
          <Year
            key={v1()}
            year={String(memories[0].year)}
            memories={memories}
          />
        );
      })}
    </Container>
  );
};
