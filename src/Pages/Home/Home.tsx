import React, { useState } from "react";
import styled from "styled-components";
import { HomeTitle } from "./HomeTitle";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { Illustration } from "../../components/Illustrations";
import { __COLORS, getAlphaColor, SPACING } from "../../Layout/Theme";
import { useInterval } from "../../components/useInterval";

const Container = styled(PageContainer)`
  flex-direction: row;
`;

const TextContainer = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const IllustrationContainer = styled(FlexBox)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled(Illustration)`
  max-width: 65%;
  height: auto;
  padding: ${SPACING * 2}px;
  margin-right: ${SPACING * 8}px;
`;

const CircleContainer = styled.div`
  position: absolute;
  top: -${SPACING * 15}px;
  right: -${SPACING * 15}px;
  z-index: -1;
`;

const SIZE = 850;
const Circle = styled.div`
  clip-path: circle(50% at 50% 50%);
  width: ${SIZE}px;
  height: ${SIZE}px;
  background: ${getAlphaColor(0.5, __COLORS.TERTIARY)};
`;

const illustrations = ["home.png", "home_2.png", "home_3.png"];

export const Home = () => {
  const [illustration, setIllustration] = useState(illustrations[0]);

  useInterval(() => {
    const nextIndex =
      (illustrations.indexOf(illustration) + 1) % illustrations.length;
    setIllustration(illustrations[nextIndex]);
  }, 5000);
  return (
    <Container>
      <CircleContainer>
        <Circle />
      </CircleContainer>
      <TextContainer flex={1}>
        <HomeTitle />
      </TextContainer>
      <IllustrationContainer flex={1}>
        <Image name={illustration} />
      </IllustrationContainer>
    </Container>
  );
};
