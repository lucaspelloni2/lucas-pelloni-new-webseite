import React from "react";
import styled from "styled-components";
import {Memories, Memory} from "../../Content";
import {useDispatch} from "react-redux";
import {__COLORS, DARK_MODE_TRANSITION, getHSLA, YEAR_HEIGHT} from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";
import {setCurrentMemory} from "../../reducers/year/actions";

const Container = styled.div<{ background: string; isActive: boolean }>`
  &:hover {
    background-color: ${props => getHSLA(0.6, props.background)};
  }
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  background-color: ${props =>
    getHSLA(props.isActive ? 0.6 : 0.25, props.background)};
  justify-content: center;
  align-items: center;
  height: ${YEAR_HEIGHT}px;
  margin: 1px 0;
  transition: ${DARK_MODE_TRANSITION};
`;

const Label = styled.h1`
  font-size: 26px;
  font-weight: 500;
  transition: ${DARK_MODE_TRANSITION};
  color: ${__COLORS.WHITE};
`;

type Props = {
  memories: Memory[];
  year: number;
};
export const Year = ({ year }: Props) => {
  const dispatch = useDispatch();
  const { currentMemory } = useAppState(s => s.year);
  const isActive = currentMemory.year === year;
  return (
    <Container
      isActive={isActive}
      onClick={() =>
        dispatch(
          setCurrentMemory(Memories.find(c => c.year === year) || currentMemory)
        )
      }
      background={currentMemory.primaryColor}
    >
      <Label>{year}</Label>
    </Container>
  );
};
