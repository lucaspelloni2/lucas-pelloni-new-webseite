import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { Month } from "./Month";
import { v1 } from "uuid";
import { useDispatch } from "react-redux";
import { setCurrentYear } from "../../reducers/year/actions";
import { YEAR_HEIGHT } from "../../Layout/Theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.3);
  color: #222;
  justify-content: center;
  align-items: center;
  height: ${YEAR_HEIGHT}px;
  margin: 1px 0;
`;

const Months = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h1`
  font-size: 26px;
  font-weight: 300;
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
