import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import {
  __COLORS,
  DARK_MODE_TRANSITION,
  getAlphaColor,
  MEMORY_LEFT_PANEL_WIDTH,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import { Memories } from "../../Content";
import useAppState from "../../reducers/useAppState";
import { useTheme } from "../../hooks/useTheme";

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
`;

const Img = styled.div<{ url: string; background: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  background-size: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  ::after {
    right: -40%;
    bottom: -12%;
    width: 10px;
    height: 50%;
    position: absolute;
    content: "";
    box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
`;

const Content = styled.div`
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
  background-size: 100%;
  height: 100%;
  width: 100%;
  -webkit-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
`;
export const Memory = () => {
  // reduxify this
  const currentMemory = Memories[0];
  const { background } = useTheme();
  const { grouped } = useAppState(s => s.year);
  return (
    <Container>
      <FlexBox flex={1}>
        <Content>
          <FlexBox flex={1}>
            <Img
              url={currentMemory.achievement.pictures[0].src}
              background={background}
            />
          </FlexBox>
          <BlurWrapper height={YEAR_HEIGHT * grouped.length}>
            <Blur url={currentMemory.achievement.pictures[0].src} />
          </BlurWrapper>
        </Content>
      </FlexBox>
    </Container>
  );
};
