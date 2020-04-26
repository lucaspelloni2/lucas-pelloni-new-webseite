import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS, SPACING } from "../Layout/Theme";
import { linearGradient } from "polished";

type Props = {
  children: ReactNode;
  secondary?: boolean;
};

const Container = styled.div`
  padding: ${SPACING}px ${SPACING * 2}px;
  background: ${__COLORS.TERTIARY};
  border-radius: 6px;
  display: flex;
  align-items: center;
  background: ${linearGradient({
    colorStops: ["#00FFFF 0%", "rgba(0, 0, 255, 0) 50%", "#0000FF 95%"],
    toDirection: "to top right",
    fallback: "#FFF"
  })};
`;
export const Button = ({ children, secondary }: Props) => {
  return <Container>button</Container>;
};
