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
import { MEDIUM_DEVICES } from "../../Layout/Mobile";

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyIcon = styled(Icon)`
  width: ${SPACING * 6}px;
  margin-bottom: -8px;
  height: ${SPACING * 6}px;
  transition: inherit;
  ${MEDIUM_DEVICES`
      width: 33px;
      height: 33px;
      margin-bottom:-3px;
    `}
`;
export const HomeTitle = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  return (
    <Titles>
      <HomeBigTitle>
        <ColoredSpan
          color={
            selectedColor === __COLORS.TERTIARY
              ? __COLORS.SECONDARY
              : __COLORS.TERTIARY
          }
        >
          I{" "}
          <MyIcon
            name={IconTypes.LOVE}
            color={
              selectedColor === __COLORS.TERTIARY
                ? __COLORS.SECONDARY
                : __COLORS.TERTIARY
            }
          />
        </ColoredSpan>{" "}
        to build beautiful products with modern{" "}
        <ColoredSpan color={selectedColor || __COLORS.FIFTH}>
          User Interfaces.
        </ColoredSpan>
      </HomeBigTitle>
      <HomeSubTitle>And any kind of digital product.</HomeSubTitle>
    </Titles>
  );
};
