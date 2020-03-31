import React from "react";
import {
  ColoredSpan,
  HomeBigTitle,
  HomeSubTitle
} from "../../Layout/Typography";
import styled from "styled-components";
import { __COLORS, COLOR_TRANSITION, SPACING } from "../../Layout/Theme";
import { Icon, IconTypes } from "../../components/Icon";
import useAppState from "../../reducers/useAppState";

const Titles = styled.div`
  display: flex;
  flex-direction: column;
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
          <Icon
            name={IconTypes.LOVE}
            color={
              selectedColor === __COLORS.TERTIARY
                ? __COLORS.SECONDARY
                : __COLORS.TERTIARY
            }
            style={{
              transition: "inherit",
              width: SPACING * 6,
              height: SPACING * 6,
              marginBottom: -8
            }}
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
