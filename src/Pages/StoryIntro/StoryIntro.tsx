import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { Title } from "../../Layout/Typography";

const Container = styled(PageContainer)``;

export const StoryIntro = () => {
  return (
    <Container>
      <Title>Second Page Here With Transition</Title>
    </Container>
  );
};
