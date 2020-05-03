import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { CIRCLE_TRANSITION, SPACING } from "../../Layout/Theme";

import {
  fadeIn,
  INITIAL_ANIMATION_DURATION_IN_SECONDS,
  slideLeft
} from "../../Layout/AnimationHelper";
import { Header } from "../../components/Header";

import { ScrollDownIcon } from "../../components/ScrollDownIcon";
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

const Image = styled(IllustrationSvg)`
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${slideLeft} forwards;
  max-width: 750px;
  height: auto;
  transition: ${CIRCLE_TRANSITION};
  padding: ${SPACING * 2}px;
  position: absolute;
`;

type Props = {
  header?: boolean;
  order: number[];
  titleComponent: ReactNode;
};

export const Home = ({ header, order, titleComponent }: Props) => {
  return useMemo(
    () => (
      <Container>
        <TextContainer flex={1} order={order[0]}>
          {header && <Header />}
          <FlexBox flex={1} />
          {titleComponent}
        </TextContainer>

        <IllustrationContainer flex={1} order={order[1]}>
          <Image />
        </IllustrationContainer>
        <ScrollDownIcon />
      </Container>
    ),
    [header, order, titleComponent]
  );
};
