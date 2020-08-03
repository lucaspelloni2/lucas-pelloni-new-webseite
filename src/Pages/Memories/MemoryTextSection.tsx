import React, { useMemo } from "react";
import styled from "styled-components";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { ColoredText } from "../../components/ColoredTitle";
import { Button } from "../../components/Button";
import { __COLORS, __GRAY_SCALE, getHSLA, SPACING } from "../../Layout/Theme";
import { SubTitle, Title } from "../../Layout/Typography";
import { Memory } from "../../Content";
import { Hashtags } from "../../components/Hashtags";
import { useDispatch } from "react-redux";
import { toggleLeftPanel } from "../../reducers/memory/actions";
import { MEDIUM_DEVICES } from "../../Layout/Mobile";
import { AnimatedArrow } from "../../components/AnimatedArrow";

const TextWrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
`;

const MyTitle = styled(Title)`
  font-size: 62px;
  color: ${__COLORS.WHITE};
  margin-bottom: 0;
  overflow-x: visible;
  ${MEDIUM_DEVICES`
        font-size: 36px;
    margin-bottom: 12px;
    `};
`;

const MySubTitle = styled(SubTitle)`
  margin-top: 0;
  color: ${__GRAY_SCALE._100};
  margin-bottom: ${SPACING * 4}px;
  ${MEDIUM_DEVICES`
    font-size: 18px; 
    text-align: justify;
    `};
`;

const TitleWrapper = styled.div`
  ::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 43px 0 131px 9vw ${getHSLA(0.25, __COLORS.PRIMARY)};
    content: " ";
    ${MEDIUM_DEVICES`display: none;`}
  }
  max-width: 60%;
  position: relative;
  padding: 0 ${SPACING * 8}px ${SPACING * 8}px ${SPACING * 8}px;
  background-color: ${getHSLA(0.25, __COLORS.PRIMARY)};
  ${MEDIUM_DEVICES`
    padding: 0px;
    max-width: 100%;
    text-align: center;
    `};
`;

const Buttons = styled.div`
  display: flex;
`;

const Text = styled.div`
  ${MEDIUM_DEVICES`padding: 10px;   `}
`;

const MyButton = styled(Button)`
  &:hover .round .arrow {
    animation-name: bounceAlpha;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &:hover .round .arrow.primera {
    animation-name: bounceAlpha;
    animation-duration: 1.4s;
    animation-delay: 0.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

type Props = {
  memory: Memory;
};

export const MemoryTextSection = ({ memory }: Props) => {
  const dispatch = useDispatch();
  const { achievement } = memory;
  return useMemo(
    () => (
      <TextWrapper flex={1}>
        <FlexBox flex={1} />
        <TitleWrapper>
          <Text>
            <MyTitle>
              <ColoredText
                text={achievement.title}
                firstWordColor={memory.primaryColor}
              />
            </MyTitle>
            {achievement.hashtags && (
              <Hashtags
                hashtags={achievement.hashtags}
                color={memory.primaryColor}
              />
            )}
            <MySubTitle>{achievement.subtitle}</MySubTitle>
          </Text>
          <Buttons>
            <MyButton
              background={memory.primaryColor}
              onClick={() => dispatch(toggleLeftPanel())}
            >
              Read the story <AnimatedArrow />
            </MyButton>
          </Buttons>
        </TitleWrapper>
      </TextWrapper>
    ),
    [
      achievement.hashtags,
      achievement.subtitle,
      achievement.title,
      dispatch,
      memory.primaryColor
    ]
  );
};
