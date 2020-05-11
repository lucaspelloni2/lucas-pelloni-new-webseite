import React, { useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { ColoredSpan, Link, SubTitle, Title } from "../../Layout/Typography";
import { __COLORS, SPACING } from "../../Layout/Theme";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { Rain } from "../../components/Rain/Rain";
import { SocialStrip } from "../../components/SocialStrip";
import { useNormalizedTransition } from "../../hooks/useNormalizedTransition";
import useAppState from "../../reducers/useAppState";

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyTitle = styled(Title)<{ color: string }>`
  font-size: 70px;
  color: ${props => props.color};
`;

const Sub = styled(SubTitle)<{ color: string }>`
  margin-top: -${SPACING * 3}px;
  font-size: 30px;
  color: ${props => props.color};
`;

type Props = {
  isActive: boolean;
};
export const StoryIntro = ({ isActive }: Props) => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  const color =
    selectedColor === __COLORS.TERTIARY || selectedColor === __COLORS.SECONDARY
      ? __COLORS.WHITE
      : __COLORS.PRIMARY;
  return useMemo(
    () => (
      <Container>
        {/*  <Rain />*/}
        <MyTitle color={color}>Lucas Pelloni - 27 years young.</MyTitle>
        <Sub color={color}>
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
    [color]
  );
};
