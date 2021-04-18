import {
  Col,
  Container,
  Flex,
  Row,
  SMALL_DEVICES_MAX_WIDTH,
  SPACING
} from "axelra-styled-bootstrap-grid";
import React, {ReactNode, useMemo} from "react";
import styled from "styled-components";
import {useMedia} from "use-media";
import {IllustrationSvg} from "../../components/IllustrationSvg";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";

const MyContainer = styled(Container)`
  height: 100%;
`;

const MyCol = styled(Col)`
  height: 100%;
`;

const MyRow = styled(Row)`
  height: 100%;
  padding: ${SPACING * 4}px;
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
  const isSmall = useMedia({maxWidth: SMALL_DEVICES_MAX_WIDTH});
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
          <MyCol md={8} xl={6} order={order[1]}>
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
