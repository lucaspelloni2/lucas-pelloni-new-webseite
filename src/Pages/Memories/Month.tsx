import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { SPACING } from "../../Layout/Theme";

const Container = styled.div`
  padding: ${SPACING}px;
`;

type Props = {
  memory: Memory;
};

export const Month = ({ memory }: Props) => {
  const { month } = memory;
  return <Container>{month.toString()}</Container>;
};
