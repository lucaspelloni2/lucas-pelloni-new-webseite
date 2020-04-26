import React, { useEffect } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import {
  __COLORS,
  __GRAY_SCALE,
  DARK_MODE_TRANSITION,
  getAlphaColor,
  getHSL,
  getHSLA,
  MEMORY_LEFT_PANEL_WIDTH,
  SPACING,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import { Memories, Memory } from "../../Content";
import useAppState from "../../reducers/useAppState";
import { useTheme } from "../../hooks/useTheme";
import { HomeTitle } from "../Home/HomeTitle";
import { Title, SubTitle } from "../../Layout/Typography";
import { useNormalizedTransition } from "../../hooks/useNormalizedTransition";
import { useDispatch } from "react-redux";
import { setCurrentMonth, setCurrentYear } from "../../reducers/year/actions";
import { parseToHsl } from "polished";
import { ColoredText } from "../../components/ColoredTitle";
import { Button } from "../../components/Button";

const Container = styled(PageContainer)<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
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
  filter: blur(7px);
`;

const ContentWrapper = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

const TextWrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
`;

const MyTitle = styled(Title)`
  font-size: 90px;
  color: ${__COLORS.WHITE};
  margin-bottom: 0;
  overflow-x: visible;
`;

const MySubTitle = styled(SubTitle)`
  margin-top: 0;
  color: ${__GRAY_SCALE._500};
`;

const TitleWrapper = styled.div<{ background: string }>`
  ::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: -230px 0 150px 20vw ${getHSLA(0.4, __COLORS.PRIMARY)};
    content: " ";
  }
  max-width: 60%;
  position: relative;
  padding: 0 ${SPACING * 8}px ${SPACING * 8}px ${SPACING * 8}px;
  background-color: ${getHSLA(0.4, __COLORS.PRIMARY)};
`;

const Buttons = styled.div`
  display: flex;
`;
type Props = {
  memory: Memory;
  isActive: boolean;
};
export const MemoryScreen = ({ memory, isActive }: Props) => {
  const { translation } = useNormalizedTransition();
  const { background } = useTheme();
  const { grouped } = useAppState(s => s.year);
  const { isDarkMode } = useAppState(s => s.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive && translation) {
      dispatch(setCurrentYear(memory.year));
      dispatch(setCurrentMonth(memory.month));
    }
  }, [translation, isActive, dispatch, memory.year, memory.month]);

  const { achievement } = memory;

  return (
    <Container isDarkMode={isDarkMode}>
      <FlexBox flex={1}>
        <Images>
          <FlexBox flex={1}>
            <Img url={achievement.pictures[0].src} background={background} />
          </FlexBox>
          <BlurWrapper height={YEAR_HEIGHT * grouped.length}>
            <Blur url={achievement.pictures[0].src} />
          </BlurWrapper>
        </Images>
      </FlexBox>
      <ContentWrapper>
        <TextWrapper flex={1}>
          <FlexBox flex={1} />
          <TitleWrapper background={background}>
            <MyTitle>
              <ColoredText text={achievement.title} firstWordColor={achievement.firstWordColor} />
            </MyTitle>
            <MySubTitle>{achievement.subtitle}</MySubTitle>
            <Buttons>
              <Button>Read the story</Button>
            </Buttons>
          </TitleWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
};
