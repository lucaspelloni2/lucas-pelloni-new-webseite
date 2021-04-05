import {Col, Container, Flex, Row, Spacer} from "axelra-styled-bootstrap-grid";
import React, {useMemo} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {AnimatedArrow} from "../../components/AnimatedArrow";
import {Button} from "../../components/Button";
import {ColoredText} from "../../components/ColoredTitle";
import {Hashtags} from "../../components/Hashtags";
import {Memory} from "../../Content";
import {useIsFocused} from "../../hooks/use-is-focused";
import {
  EXTRA_SMALL_DEVICES,
  MEDIUM_DEVICES,
  SMALL_DEVICES
} from "../../Layout/Mobile";
import {SPACING, __COLORS, __GRAY_SCALE} from "../../Layout/Theme";
import {SubTitle, Title} from "../../Layout/Typography";
import {toggleLeftPanel} from "../../reducers/memory/actions";
import {MemoryAnimatedDots} from "./MemoryAnimatedDots";

const MyTitle = styled(Title)`
  font-size: 62px;
  margin: 0;
  color: ${__COLORS.WHITE};
  ${EXTRA_SMALL_DEVICES`   font-size: 30px;`};
`;

const MySubTitle = styled(SubTitle)`
  margin-top: 0;
  color: ${__GRAY_SCALE._100};
  margin-bottom: ${SPACING * 4}px;

  ${MEDIUM_DEVICES`
    font-size: 18px; 
    text-align: justify;
    `};
  ${SMALL_DEVICES` display: block;`};
  ${EXTRA_SMALL_DEVICES`
    display: none;
  `};
`;

const TitleWrapper = styled.div``;

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
};

export const MemoryTextSection = ({memory}: Props) => {
  const dispatch = useDispatch();
  const {achievement} = memory;
  const isFocused = useIsFocused(memory);

  return useMemo(
    () => (
      <Container>
        <RowHeight>
          <ColHeight xs={12} sm={10} md={8}>
            <Flex flex={1} />
            <Flex column>
              <TitleWrapper>
                {isFocused ? (
                  <MemoryAnimatedDots pictures={achievement.pictures} />
                ) : null}
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
      dispatch,
      isFocused,
      memory.primaryColor
    ]
  );
};
