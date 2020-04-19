import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import {
  __COLORS,
  DARK_MODE_TRANSITION,
  getAlphaColor,
  MEMORY_LEFT_PANEL_WIDTH, SPACING,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import { Memories } from "../../Content";
import useAppState from "../../reducers/useAppState";
import { useTheme } from "../../hooks/useTheme";
import { HomeTitle } from "../Home/HomeTitle";
import {Title} from "../../Layout/Typography";

const Container = styled(PageContainer)<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
  ::after {
    left: 35%;
    bottom: -12%;
    width: 300px;
    height: 15%;
    position: absolute;
    content: "";
    box-shadow: -230px 0 150px 20vw
      ${props => `hsla(0, 0%, ${props.isDarkMode ? 0 : 100}%, 0.5)`};
    z-index: 1000;
  }
`;

const Img = styled.div<{ url: string; background: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
`;

const Images = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;
const Content = styled.div`
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100%;
  display: flex;
`;

const BlurWrapper = styled.div<{ height: number }>`
  align-self: flex-end;
  height: ${props => props.height}px;
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
`;
const Blur = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  background-size: cover;
  height: 100%;
  width: 100%;
  -webkit-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
`;

const TitleWrapper = styled.div`
  z-index: 1000;
  padding: 0 ${SPACING * 4}px;
`;
export const Memory = () => {
  // reduxify this
  const currentMemory = Memories[0];
  const { background } = useTheme();
  const { grouped } = useAppState(s => s.year);
  const { isDarkMode } = useAppState(s => s.darkMode);
  return (
    <Container isDarkMode={isDarkMode}>
      <FlexBox flex={1}>
        <Images>
          <FlexBox flex={1}>
            <Img
              url={currentMemory.achievement.pictures[0].src}
              background={background}
            />
          </FlexBox>
          <BlurWrapper height={YEAR_HEIGHT * grouped.length}>
            <Blur url={currentMemory.achievement.pictures[0].src} />
          </BlurWrapper>
        </Images>
      </FlexBox>
      <Content>
        <TitleWrapper>
          <Title>{currentMemory.achievement.title}</Title>
        </TitleWrapper>
      </Content>
    </Container>
  );
};
