import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { MEMORY_LEFT_PANEL_WIDTH } from "../../Layout/Theme";

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-left: ${MEMORY_LEFT_PANEL_WIDTH}px;
`;

export const Memory = () => {
  return (
    <Container>
      <FlexBox flex={1}>
        <Content>This is amesome conten</Content>
      </FlexBox>
    </Container>
  );
};
