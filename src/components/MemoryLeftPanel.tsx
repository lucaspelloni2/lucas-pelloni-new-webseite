import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import {
  __COLORS,
  LEFT_PANEL_TRANSITION,
  LEFT_PANEL_TRANSITION_DURATION_IN_SECONDS,
  MEMORY_LEFT_PANEL_WIDTH,
  SPACING
} from "../Layout/Theme";
import { CloseIcon } from "./CloseIcon";
import useAppState from "../reducers/useAppState";
import { fadeInBezier } from "../Layout/AnimationHelper";
import { useMemoryColor } from "../hooks/useMemoryColor";
import { MemoryLogo } from "./MemoryLogo";
import { useMarkdown } from "../hooks/useMarkdown";
import { Button } from "./Button";
import { Link } from "../Layout/Typography";
// @ts-ignore
import Vimeo from "@u-wave/react-vimeo";

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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const TextDelay = styled.div<{ isLeftPanelOpen: boolean; color: string }>`
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
  opacity: ${props => (props.isLeftPanelOpen ? 1 : 0)};
  transition: ${LEFT_PANEL_TRANSITION};
  animation: ${props =>
    props.isLeftPanelOpen
      ? css`
          ${fadeInBezier} ${LEFT_PANEL_TRANSITION_DURATION_IN_SECONDS *
            13}s forwards
        `
      : "none"};
  color: ${__COLORS.PRIMARY};
  font-size: 18px;
`;

const MyButton = styled(Button)<{ isLeftPanelOpen: boolean }>`
  animation: ${props =>
    props.isLeftPanelOpen
      ? css`
          ${fadeInBezier} ${LEFT_PANEL_TRANSITION_DURATION_IN_SECONDS *
            15}s forwards
        `
      : "none"};
  opacity: ${props => (props.isLeftPanelOpen ? 1 : 0)};
  transition: ${LEFT_PANEL_TRANSITION};
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {
  isActive: boolean;
};
export const MemoryLeftPanel = ({ isActive }: Props) => {
  const { isLeftPanelOpen, currentMemory } = useAppState(s => s.memory);

  const { color } = useMemoryColor();
  const { html } = useMarkdown({
    text: currentMemory.achievement.description || ""
  });

  const { link, videos } = currentMemory.achievement;

  return useMemo(
    () => (
      <Container isLeftPanelOpen={isLeftPanelOpen}>
        <Header background={color}>
          <CloseIcon />
          <MemoryLogo />
        </Header>
        <Body isLeftPanelOpen={isLeftPanelOpen}>
          <TextDelay isLeftPanelOpen={isLeftPanelOpen} color={color}>
            {html}
            <VideoWrapper>
              {videos &&
                isLeftPanelOpen &&
                videos.map((v, i: number) => (
                  <Vimeo
                    video={v.videoId}
                    autoplay={i === 0 && isLeftPanelOpen}
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                ))}
            </VideoWrapper>
          </TextDelay>
        </Body>
        <Footer>
          {isLeftPanelOpen && link && (
            <MyButton
              background={color}
              secondary
              isLeftPanelOpen={isLeftPanelOpen}
            >
              <Link color={color} href={link} target="_blank">
                Learn More.
              </Link>
            </MyButton>
          )}
        </Footer>
      </Container>
    ),
    [color, html, isLeftPanelOpen, link, videos]
  );
};