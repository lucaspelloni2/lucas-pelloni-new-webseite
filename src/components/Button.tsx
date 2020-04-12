import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS, SPACING } from "../Layout/Theme";

type Props = {
  children: ReactNode;
  secondary?: boolean;
};

const Container = styled.div`
  padding: ${SPACING}px ${SPACING * 2}px;
`;
export const Button = ({ children, secondary }: Props) => {
  return <Container>button</Container>;
};
