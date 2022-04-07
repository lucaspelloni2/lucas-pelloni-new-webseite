import React, { useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { Link, SubTitle, Title } from "../../Layout/Typography";
import { __COLORS, getRandomColor, SPACING } from "../../Layout/Theme";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { SocialStrip } from "../../components/SocialStrip";
import useAppState from "../../reducers/useAppState";
import { MEDIUM_DEVICES } from "../../Layout/Mobile";
import { useDispatch } from "react-redux";
import { setColor } from "../../reducers/selectedColor/actions";

const Container = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
`;

const MyTitle = styled(Title)<{ color: string }>`
  font-size: 70px;
  color: ${props => props.color};
  ${MEDIUM_DEVICES`
     font-size: 40px;
     text-align: center;
  `}
`;

const Sub = styled(SubTitle)<{ color: string }>`
  margin-top: -${SPACING * 3}px;
  font-size: 30px;
  color: ${props => props.color};
  ${MEDIUM_DEVICES`
     margin-top: 10px; 
     text-align: center; 
  `}
`;

export const StoryIntro = () => {
  const dispatch = useDispatch();
  const { selectedColor } = useAppState(s => s.selectedColor);
  const color =
    selectedColor === __COLORS.TERTIARY || selectedColor === __COLORS.SECONDARY
      ? __COLORS.WHITE
      : __COLORS.PRIMARY;
  return useMemo(
    () => (
      <Container onClick={() => dispatch(setColor(getRandomColor()))}>
        {/*    <Rain />*/}
        <MyTitle color={color}>Lucas Pelloni - 29 years young.</MyTitle>
        <Sub color={color}>
          Grew up in{" "}
          <Link
            color={__COLORS.FOURTH}
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
    [color, dispatch]
  );
};
