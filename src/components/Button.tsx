import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS, SPACING } from "../Layout/Theme";
import { linearGradient } from "polished";

type Props = {
  children: ReactNode;
  secondary?: boolean;
};

const Container = styled.div<{ secondary?: boolean }>`
  padding: ${SPACING * 1.5}px ${SPACING * 4}px;
  background: ${__COLORS.TERTIARY};
  border-radius: 6px;
  display: flex;
  font-size: 20px;
  z-index: 10;
  align-items: center;
  color: ${__COLORS.WHITE};
  cursor: pointer;
  background: ${linearGradient({
    colorStops: [__COLORS.TERTIARY, __COLORS.TERTIARY_HOVER],
    toDirection: "to right",
    fallback: __COLORS.TERTIARY
  })};
`;
export const Button = ({ children, secondary }: Props) => {
  return <Container secondary={secondary}>{children}</Container>;
};
