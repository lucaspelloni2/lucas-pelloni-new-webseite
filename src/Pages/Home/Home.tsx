import {Col, Container, Flex, Row} from "axelra-styled-bootstrap-grid";
import React, {ReactNode, useMemo} from "react";
import styled from "styled-components";
import {IllustrationSvg} from "../../components/IllustrationSvg";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {__COLORS} from "../../Layout/Theme";

const MyContainer = styled(Container)`
  height: 100%;
`;

const MyCol = styled(Col)`
  height: 100%;
`;

const MyRow = styled(Row)`
  height: 100%;
  ${MEDIUM_DEVICES`height: auto;`}
`;

const MyFlex = styled(Flex)`
  height: 100%;
`;

const Image = styled(IllustrationSvg)`
  max-width: 75%;
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
          <MyCol md={4} xl={6} order={order[0]}>
            <MyFlex column>
              <Flex flex={1} />
              {titleComponent}
            </MyFlex>
          </MyCol>
          <MyCol
            md={8}
            xl={6}
            order={order[1]}
            style={{backgroundColor: __COLORS.TERTIARY}}
          >
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
