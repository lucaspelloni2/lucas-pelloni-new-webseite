import {Col, Container, Flex, Row, SPACING} from "axelra-styled-bootstrap-grid";
import React, {ReactNode, useMemo} from "react";
import styled from "styled-components";
import {IllustrationSvg} from "../../components/IllustrationSvg";
import {LARGE_DEVICES} from "../../Layout/Mobile";

const MyContainer = styled(Container)`
  height: 100%;
`;

const MyCol = styled(Col)`
  height: 100%;
`;

const MyRow = styled(Row)`
  height: 100%;
  padding: ${SPACING * 4}px;
  ${LARGE_DEVICES`height: auto;`}
`;

const MyFlex = styled(Flex)`
  height: 100%;
`;

const Image = styled(IllustrationSvg)`
  max-width: 125%;
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
          <MyCol lg={8} order={order[0]}>
            <MyFlex column>
              <Flex flex={1} />
              {titleComponent}
            </MyFlex>
          </MyCol>
          <MyCol lg={4} order={order[1]}>
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
