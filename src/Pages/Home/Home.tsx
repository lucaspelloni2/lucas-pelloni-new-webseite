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
import {
  LARGE_DEVICES,
  MEDIUM_DEVICES,
  SMALL_DEVICES
} from "../../Layout/Mobile";

const Container = styled(PageContainer)`
  flex-direction: row;
  position: relative;
  ${MEDIUM_DEVICES`
      flex-direction: column;
      flex: 1;
      height: 100%;
    `};
`;

const TextContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${SPACING * 2}px ${SPACING * 5}px;
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${fadeIn} forwards;
  order: ${props => props.order};
  ${MEDIUM_DEVICES`
    order: 2;
    padding: 0;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;
    `};
`;

const IllustrationContainer = styled(FlexBox)<{ order: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  order: ${props => props.order};
  ${MEDIUM_DEVICES`
    flex-direction: column;
    order: 1;
    justify-content: center;
    align-items:center;
    flex: 1;
    `};
`;

const Image = styled(IllustrationSvg)`
  animation: ${INITIAL_ANIMATION_DURATION_IN_SECONDS}s ${slideLeft} forwards;
  max-width: 750px;
  height: auto;
  transition: ${CIRCLE_TRANSITION};
  padding: ${SPACING * 2}px;
  position: absolute;
  ${LARGE_DEVICES`
    max-width: 436px;
    left:0;
    padding: 0;
    `};
`;

const MyFlex = styled(FlexBox)`
  ${MEDIUM_DEVICES`
    display: none;
    `};
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
          <MyFlex flex={1} />
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
