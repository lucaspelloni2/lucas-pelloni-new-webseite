import React from "react";
import styled from "styled-components";
import useAppState from "../reducers/useAppState";
import { __COLORS, DEFAULT_LOGO, getHSLA, SPACING } from "../Layout/Theme";
import { useMemoryColor } from "../hooks/useMemoryColor";

const SIZE = 140;
const Container = styled.div<{ isLeftPanelOpen: boolean; color: string }>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  opacity: ${props => (props.isLeftPanelOpen ? 1 : 0)};
  z-index: ${props => (props.isLeftPanelOpen ? 1 : -50)};
  display: flex;
  transition: inherit;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => getHSLA(0.5, props.color)};
  background: ${__COLORS.WHITE};
  margin-bottom: -${SIZE / 2}px;
  padding: ${SPACING * 2}px;
`;

const Logo = styled.img`
  height: auto;
  max-width: 100%;
`;

export const MemoryLogo = () => {
  const { isLeftPanelOpen, currentMemory } = useAppState(s => s.memory);
  const { color } = useMemoryColor();
  const logo = currentMemory.achievement?.logo;
  return (
    <Container isLeftPanelOpen={isLeftPanelOpen} color={color}>
      <Logo src={logo?.src || DEFAULT_LOGO} />
    </Container>
  );
};
