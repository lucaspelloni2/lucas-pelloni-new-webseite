import React from "react";
import styled from "styled-components";
import useAppState from "../reducers/useAppState";
import { LEFT_PANEL_TRANSITION } from "../Layout/Theme";

const SIZE = 140;
const Container = styled.div<{ isLeftPanelOpen: boolean }>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  opacity: ${props => (props.isLeftPanelOpen ? 1 : 0)};
  z-index: ${props => (props.isLeftPanelOpen ? 1 : -5)};
  transition: ${LEFT_PANEL_TRANSITION};
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  margin-bottom: -${SIZE / 2}px;
`;

export const MemoryLogo = () => {
  const { isLeftPanelOpen } = useAppState(s => s.memory);
  return <Container isLeftPanelOpen={isLeftPanelOpen}>MemoryLogo</Container>;
};
