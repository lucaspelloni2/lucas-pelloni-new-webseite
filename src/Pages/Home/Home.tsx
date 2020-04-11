import React, { ReactNode } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { Illustration } from "../../components/Illustrations";
import { SPACING } from "../../Layout/Theme";

import {
  fadeIn,
  INITIAL_ANIMATION_DURATION_IN_SECONDS,
  slideLeft
} from "../../Layout/AnimationHelper";
import { Header } from "../../components/Header";

import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { useDispatch } from "react-redux";
import { setTranslation } from "../../reducers/translation/actions";
import { Direction } from "../../reducers/translation/types";
import { IllustrationSvg } from "../../components/IllustrationSvg";

const Container = styled(PageContainer)`
  flex-direction: row;
  position: relative;
`;

const TextContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${SPACING * 2}px ${SPACING * 5}px;
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${fadeIn} forwards;
  order: ${props => props.order};
`;

const IllustrationContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  order: ${props => props.order};
`;

const DownIconWrapper = styled.div`
  position: absolute;
  height: ${SPACING * 10}px;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  left: 0;
  z-index: 100;
`;

const Image = styled(IllustrationSvg)`
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${slideLeft} forwards;
  max-width: 700px;
  height: auto;
  transition: 1s ease-in-out all;
  padding: ${SPACING * 2}px;
  position: absolute;
`;

type Props = {
  header?: boolean;
  order: number[];
  illustration: string;
  titleComponent: ReactNode;
};

export const Home = ({
  header,
  order,
  illustration,
  titleComponent
}: Props) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <TextContainer flex={1} order={order[0]}>
        {header && <Header />}
        <FlexBox flex={1} />
        {titleComponent}
      </TextContainer>

      <IllustrationContainer flex={1} order={order[1]}>
        <Image />
      </IllustrationContainer>

      <DownIconWrapper>
        <ScrollDownIcon
          onClick={() => {
            dispatch(setTranslation(Direction.DOWN));
          }}
        />
      </DownIconWrapper>
    </Container>
  );
};
