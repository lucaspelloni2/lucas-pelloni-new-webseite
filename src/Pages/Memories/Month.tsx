import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";


const Container = styled.div``;

type Props = {
  memory: Memory;
};

export const Month = ({ memory }: Props) => {
  const { month } = memory;
  return <Container>{month.toString()}</Container>;
};
