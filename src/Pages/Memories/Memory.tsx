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
  /*  ::after {
    right: -20%;
    bottom: -12%;
    width: 10px;
    height: 50%;
    position: absolute;
    content: "";
    box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, 0.7);
  }*/
`;

const Img = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  background-size: 100%;
  height: 100%;
  width: 100%;
  ::after {
    right: -40%;
    bottom: -12%;
    width: 10px;
    height: 50%;
    position: absolute;
    content: "";
    box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, 0.7);
  }
`;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
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
