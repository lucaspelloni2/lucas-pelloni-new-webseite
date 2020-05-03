import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  __COLORS,
  LEFT_PANEL_TRANSITION,
  MEMORY_LEFT_PANEL_WIDTH,
  SPACING
} from "../Layout/Theme";
import { CloseIcon } from "./CloseIcon";
import useAppState from "../reducers/useAppState";
import { fadeInBezier, fadeOut } from "../Layout/AnimationHelper";
import { useMemoryColor } from "../hooks/useMemoryColor";
import { MemoryLogo } from "./MemoryLogo";
import { useMarkdown } from "../hooks/useMarkdown";

const Container = styled.div<{ isLeftPanelOpen: boolean }>`
  width: ${props => (props.isLeftPanelOpen ? MEMORY_LEFT_PANEL_WIDTH : 0)};
  background: ${__COLORS.WHITE};
  transition: ${LEFT_PANEL_TRANSITION};
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div<{ background: string }>`
  height: 15%;
  background: ${props => props.background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Body = styled.div<{ isLeftPanelOpen: boolean }>`
  flex: 1;
  overflow-y: scroll;
  padding: ${props => (props.isLeftPanelOpen ? `0 ${SPACING * 5}` : 0)}px;
  transition: inherit;
  text-align: justify;
  margin-top: ${SPACING * 8}px;
`;

const Footer = styled.div`
  min-height: 100px;
`;

const TextDelay = styled.div<{ showText: boolean; color: string }>`
  & > p > a {
    color: ${props => props.color};
  }
  & > p {
    color: ${__COLORS.PRIMARY};
  }
  & > ol > li > p {
    color: ${__COLORS.PRIMARY};
    font-weight: 500;
  }
  animation: ${props =>
    props.showText
      ? css`
          ${fadeInBezier} 5s forwards
        `
      : css`
          ${fadeOut} 2s forwards
        `};
  color: ${__COLORS.PRIMARY};
  font-size: 18px;
`;
type Props = {
  isActive: boolean;
};
export const MemoryLeftPanel = ({ isActive }: Props) => {
  const { isLeftPanelOpen, currentMemory } = useAppState(s => s.memory);
  const [showText, setShowText] = useState(false);
  const { color } = useMemoryColor();
  const { html } = useMarkdown({
    text: currentMemory.achievement.description || ""
  });

  useEffect(() => {
    if (isLeftPanelOpen && isActive) {
      setShowText(true);
    } else if (!isLeftPanelOpen && isActive) {
      setShowText(false);
    }
  }, [isActive, isLeftPanelOpen]);

  return (
    <Container isLeftPanelOpen={isLeftPanelOpen}>
      <Header background={color}>
        <CloseIcon />
        <MemoryLogo />
      </Header>
      <Body isLeftPanelOpen={isLeftPanelOpen}>
        <TextDelay showText={showText} color={color}>
          {html}
        </TextDelay>
      </Body>
      <Footer />
    </Container>
  );
};
