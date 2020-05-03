import React, { useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { ColoredSpan, Link, SubTitle, Title } from "../../Layout/Typography";
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
        <MyTitle>Lucas Pelloni - 27 years old.</MyTitle>
        <Sub>
          Grew up in{" "}
          <Link
            color={__COLORS.TERTIARY}
            href="https://en.wikipedia.org/wiki/Lugano"
            target="_blank"
          >
            Lugano (TI)
          </Link>
          , resident and working in{" "}
          <Link
            color={__COLORS.FOURTH}
            href="https://en.wikipedia.org/wiki/Z%C3%BCrich"
            target="_blank"
          >
            Zurich (ZH)
          </Link>
          .
        </Sub>
        <SocialStrip />
        <ScrollDownIcon />
      </Container>
    ),
    []
  );
};
