import {Col, Container, Flex, Row, Spacer} from "axelra-styled-bootstrap-grid";
import React, {useMemo} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {AnimatedArrow} from "../../components/AnimatedArrow";
import {Button} from "../../components/Button";
import {ColoredText} from "../../components/ColoredTitle";
import {Hashtags} from "../../components/Hashtags";
import {Memory} from "../../Content";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {FlexBox} from "../../Layout/styled/FlexBox";
import {getHSLA, SPACING, __COLORS, __GRAY_SCALE} from "../../Layout/Theme";
import {SubTitle, Title} from "../../Layout/Typography";
import {toggleLeftPanel} from "../../reducers/memory/actions";
import {MemoryAnimatedDots} from "./MemoryAnimatedDots";

const TextWrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
`;

const MyTitle = styled(Title)`
  font-size: 62px;
  margin: 0;
  color: ${__COLORS.WHITE};
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
    z-index: -1;
    position: absolute;
    box-shadow: 43px 0 131px 9vw ${getHSLA(0.25, __COLORS.PRIMARY)};
    content: " ";
    ${MEDIUM_DEVICES`display: none;`}
  }
  position: relative;
  background-color: ${getHSLA(0.25, __COLORS.PRIMARY)};
`;

const Buttons = styled.div`
  display: flex;
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

const RowHeight = styled(Row)`
  height: 100%;
`;
const ColHeight = styled(Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  memory: Memory;
  current: number;
  isActive: boolean;
};

export const MemoryTextSection = ({memory, isActive, current}: Props) => {
  const dispatch = useDispatch();
  const {achievement} = memory;
  return useMemo(
    () => (
      <Container>
        <RowHeight>
          <ColHeight xs={12} sm={10} md={8}>
            <Flex flex={1} />
            <Flex column>
              <TitleWrapper>
                <MemoryAnimatedDots
                  pictures={achievement.pictures}
                  current={current}
                  isActive={isActive}
                />
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
                <Spacer />
                <Buttons>
                  <MyButton
                    background={memory.primaryColor}
                    onClick={() => dispatch(toggleLeftPanel())}
                  >
                    Read the story <AnimatedArrow />
                  </MyButton>
                </Buttons>
              </TitleWrapper>
              <Spacer x10 />
              <Spacer x5 />
            </Flex>
          </ColHeight>
        </RowHeight>
      </Container>
    ),
    [
      achievement.hashtags,
      achievement.pictures,
      achievement.subtitle,
      achievement.title,
      current,
      dispatch,
      memory.primaryColor
    ]
  );
};
