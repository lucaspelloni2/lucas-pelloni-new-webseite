import React from "react";
import styled from "styled-components";
import { Memory } from "../Content";
import { getHSLA } from "../Layout/Theme";

const SIZE = 50;

const Container = styled.div<{ background: string }>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  background: ${props => getHSLA(0.3, props.background)};
`;

type Props = {
  memory: Memory;
};

export const CarouselArrow = ({ memory }: Props) => {
  return <Container background={memory.primaryColor}>CarouselArrow</Container>;
};
