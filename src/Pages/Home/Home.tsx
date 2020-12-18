import React, { ReactNode, useMemo } from "react";
import {
  Col,
  Container,
  Flex,
  Row,
  SPACING
} from "axelra-styled-bootstrap-grid";
import styled from "styled-components";
import { IllustrationSvg } from "../../components/IllustrationSvg";
import {
  INITIAL_ANIMATION_DURATION_IN_SECONDS,
  slideLeft
} from "../../Layout/AnimationHelper";
import { CIRCLE_TRANSITION } from "../../Layout/Theme";

const MyContainer = styled(Container)`
  height: 100%;
`;
const MyCol = styled(Col)`
  height: 100%;
`;
const MyRow = styled(Row)`
  height: 100%;
  padding: ${SPACING * 4}px;
`;

const MyFlex = styled(Flex)`
  height: 100%;
  background: aliceblue;
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
      <MyContainer fluid>
        <MyRow>
          <MyCol md={6}>
            <MyFlex column>
              <Flex flex={1} />
              {titleComponent}
            </MyFlex>
          </MyCol>
          <MyCol md={6}>
            <Image />
          </MyCol>
        </MyRow>
      </MyContainer>
    ),
    [header, order, titleComponent]
  );
};
