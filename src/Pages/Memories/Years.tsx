import React from "react";
import styled from "styled-components";
import { MEMORY_LEFT_PANEL_WIDTH, PAGE_TRANSITION } from "../../Layout/Theme";

const Container = styled.div<{ visible: boolean }>`
  background: red;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? 3 : -10)};
  transition: ${PAGE_TRANSITION};
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
`;

type Props = {
  visible: boolean;
};

export const Years = ({ visible }: Props) => {
  return <Container visible={visible}>Years</Container>;
};
