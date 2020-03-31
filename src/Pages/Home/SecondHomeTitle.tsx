import React from "react";
import {
  ColoredSpan,
  HomeBigTitle,
  HomeSubTitle
} from "../../Layout/Typography";
import styled from "styled-components";
import { __COLORS, SPACING } from "../../Layout/Theme";
import { Icon, IconTypes } from "../../components/Icon";
import useAppState from "../../reducers/useAppState";

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(HomeBigTitle)`
  text-align: right;
`;

const SubTitle = styled(HomeSubTitle)`
  text-align: right;
`;

export const SecondHomeTitle = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  return (
    <Titles>
      <Title>
        Let{" "}
        <ColoredSpan
          color={
            selectedColor === __COLORS.TERTIARY
              ? __COLORS.SECONDARY
              : __COLORS.TERTIARY
          }
        >
          me
        </ColoredSpan>{" "}
        introduce myself. <br />I am{" "}
        <ColoredSpan color={selectedColor}>Lucas</ColoredSpan>, and this is
        <br />
        <ColoredSpan color={__COLORS.FOURTH}>the story of my life.</ColoredSpan>
      </Title>
      <SubTitle>Let's start the Journey.</SubTitle>
    </Titles>
  );
};
