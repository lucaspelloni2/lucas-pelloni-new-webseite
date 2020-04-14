import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { MEMORY_LEFT_PANEL_WIDTH } from "../../Layout/Theme";
import { Memories } from "../../Content";

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
`;

const Img = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  margin-left: ${MEMORY_LEFT_PANEL_WIDTH}px;
`;

export const Memory = () => {
  // reduxify this
  const currentMemory = Memories[0];
  return (
    <Container>
      <FlexBox flex={1}>
        <Content>
          <Img url={currentMemory.achievement.pictures[0].src} />
        </Content>
      </FlexBox>
    </Container>
  );
};
