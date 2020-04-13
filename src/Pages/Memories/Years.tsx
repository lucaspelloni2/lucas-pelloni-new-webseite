import React from "react";
import styled from "styled-components";
import { MEMORY_LEFT_PANEL_WIDTH, PAGE_TRANSITION } from "../../Layout/Theme";
import { Memories, Memory } from "../../Content";
import _ from "lodash";

const Container = styled.div<{ visible: boolean }>`
  background: red;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? 3 : -10)};
  transition: ${PAGE_TRANSITION};
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  const groupedItems = _(Memories)
    .groupBy((e: Memory) => e.year)
    .orderBy(year => year, "desc")
    .value();

  console.log(groupedItems);
  return <Container visible={visible}>Years</Container>;
};
