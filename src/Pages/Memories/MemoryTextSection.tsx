import React, { useMemo } from "react";
import styled from "styled-components";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { ColoredText } from "../../components/ColoredTitle";
import { Button } from "../../components/Button";
import { Icon, IconTypes } from "../../components/Icon";
import { __COLORS, __GRAY_SCALE, getHSLA, SPACING } from "../../Layout/Theme";
import { SubTitle, Title } from "../../Layout/Typography";
import { Memory } from "../../Content";
import { Hashtags } from "../../components/Hashtags";
import { useDispatch } from "react-redux";
import { toggleLeftPanel } from "../../reducers/memory/actions";

const TextWrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
`;

const MyTitle = styled(Title)`
  font-size: 62px;
  color: ${__COLORS.WHITE};
  margin-bottom: 0;
  overflow-x: visible;
`;

const MySubTitle = styled(SubTitle)`
  margin-top: 0;
  color: ${__GRAY_SCALE._100};
  margin-bottom: ${SPACING * 4}px;
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
  }
  max-width: 60%;
  position: relative;
  padding: 0 ${SPACING * 8}px ${SPACING * 8}px ${SPACING * 8}px;
  background-color: ${getHSLA(0.25, __COLORS.PRIMARY)};
`;

const Buttons = styled.div`
  display: flex;
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
          <Buttons>
            <Button
              background={memory.primaryColor}
              onClick={() => dispatch(toggleLeftPanel())}
            >
              Read the story{" "}
              <Icon
                name={IconTypes.ARROW_RIGHT}
                color={__COLORS.WHITE}
                style={{
                  marginLeft: SPACING,
                  width: SPACING * 2.5,
                  height: SPACING * 2.5
                }}
              />
            </Button>
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
