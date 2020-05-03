import React, { useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { ColoredSpan, SubTitle, Title } from "../../Layout/Typography";
import { __COLORS, SPACING } from "../../Layout/Theme";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { Rain } from "../../components/Rain/Rain";
import { SocialStrip } from "../../components/SocialStrip";

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyTitle = styled(Title)`
  font-size: 70px;
`;

const Sub = styled(SubTitle)`
  margin-top: -${SPACING * 3}px;
  font-size: 30px;
`;

export const StoryIntro = () => {
  return useMemo(
    () => (
      <Container>
        <Rain />
        <MyTitle>Lucas Pelloni - 18.03.1993</MyTitle>
        <Sub>
          Grew up in <ColoredSpan color={__COLORS.TERTIARY}>Ticino</ColoredSpan>
          , resident and working in{" "}
          <ColoredSpan color={__COLORS.FOURTH}>Zurich</ColoredSpan>.
        </Sub>
        <SocialStrip />
        <ScrollDownIcon />
      </Container>
    ),
    []
  );
};
