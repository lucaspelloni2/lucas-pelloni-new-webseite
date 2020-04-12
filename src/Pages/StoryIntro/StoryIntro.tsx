import React from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { Title } from "../../Layout/Typography";

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StoryIntro = () => {
  return (
    <Container>
      <Title>Lucas Pelloni, 18.03.1993</Title>
    </Container>
  );
};
