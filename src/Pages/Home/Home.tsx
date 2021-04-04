import {Col, Container, Flex, Row, SPACING} from "axelra-styled-bootstrap-grid";
import React, {ReactNode, useMemo} from "react";
import styled from "styled-components";
import {IllustrationSvg} from "../../components/IllustrationSvg";

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
`;

const Image = styled(IllustrationSvg)`
  max-width: 85%;
  height: auto;
`;

type Props = {
  order: number[];
  titleComponent: ReactNode;
};

export const Home = ({order, titleComponent}: Props) => {
  return useMemo(
    () => (
      <MyContainer fluid>
        <MyRow>
          <MyCol md={6} order={order[0]}>
            <MyFlex column>
              <Flex flex={1} />
              {titleComponent}
            </MyFlex>
          </MyCol>
          <MyCol md={6} order={order[1]}>
            <MyFlex column flex={1} justify="center" align="center">
              <Image />
            </MyFlex>
          </MyCol>
        </MyRow>
      </MyContainer>
    ),
    [order, titleComponent]
  );
};
