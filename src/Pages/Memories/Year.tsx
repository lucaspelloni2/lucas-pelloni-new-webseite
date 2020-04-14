import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { Month } from "./Month";
import { v1 } from "uuid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Months = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h1`
  font-size: 26px;
  font-weight: 700;

`;

type Props = {
  memories: Memory[];
  year: string;
};
export const Year = ({ year, memories }: Props) => {
  return (
    <Container>
      <Label>{year}</Label>
      {/*      <Months>
        {memories.map((m: Memory) => {
          return <Month key={v1()} memory={m} />;
        })}
      </Months>*/}
    </Container>
  );
};
