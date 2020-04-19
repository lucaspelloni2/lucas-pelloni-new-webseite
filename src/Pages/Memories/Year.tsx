import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { Month } from "./Month";
import { v1 } from "uuid";
import { useDispatch } from "react-redux";
import { setCurrentYear } from "../../reducers/year/actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
  year: number;
};
export const Year = ({ year, memories }: Props) => {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(setCurrentYear(year))}>
      <Label>{year}</Label>
      {/*      <Months>
        {memories.map((m: Memory) => {
          return <Month key={v1()} memory={m} />;
        })}
      </Months>*/}
    </Container>
  );
};
