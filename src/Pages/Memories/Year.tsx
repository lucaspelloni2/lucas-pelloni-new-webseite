import React, { useMemo } from "react";
import styled from "styled-components";
import { Memory, MONTHS } from "../../Content";
import { useDispatch } from "react-redux";
import {
  __COLORS,
  COLOR_TRANSITION,
  DARK_MODE_TRANSITION,
  getHSLA,
  PAGE_TRANSITION,
  PAGE_TRANSITION_LINEAR,
  SPACING,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";
import { setCurrentMemory } from "../../reducers/memory/actions";
import { setNumberTranslation } from "../../reducers/translation/actions";

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
  margin: 1.5px 0;
  transition: ${DARK_MODE_TRANSITION};
`;

const Label = styled.h1`
  font-size: 22px;
  font-weight: 500;
  transition: ${DARK_MODE_TRANSITION};
  color: ${__COLORS.WHITE};
  margin-bottom: 0;
`;

const Month = styled.div<{
  background: string;
  isActive: boolean;
  month: MONTHS;
}>`
  &:before {
    content: "${props => props.month.toString()}";
    transition: ${COLOR_TRANSITION};
    transform: scale(${props => (props.isActive ? 1 : 0)});
    opacity: ${props => (props.isActive ? 1 : 0)};
    font-size: ${props => (props.isActive ? 14 : 0)}px;
  }
  
 max-height: ${props => props.isActive ? 40: 0}px;
  pointer-events: none;
  opacity: ${props => (props.isActive ? 1 : 0)};
  cursor: default;
  font-weight: 700;
  color: ${__COLORS.WHITE};
  letter-spacing: 0.5px;
  font-size: 14px;
  transform: scale(${props => (props.isActive ? 1 : 0)});
  border-radius: 10px;
  text-transform: uppercase;
  will-change: transform;
  padding: ${SPACING / 2}px ${SPACING}px;
  background-color: ${props => getHSLA(1, props.background)};
  box-shadow: 0 2px 10px 5px ${props =>
    getHSLA(0.2, props.background)} !important;
`;

type Props = {
  memories: Memory[];
  year: number;
};
export const Year = ({ year }: Props) => {
  const dispatch = useDispatch();
  const { currentMemory, translatedMemories } = useAppState(s => s.memory);
  const isActive = currentMemory.year === year;

  return useMemo(
    () => (
      <Container
        isActive={isActive}
        onClick={() => {
          const destination = translatedMemories.find(m => m.year === year);
          dispatch(setNumberTranslation(Number(destination?.translation) * -1));
          dispatch(setCurrentMemory(destination || currentMemory));
        }}
        background={currentMemory.primaryColor}
      >
        <Label>{year}</Label>
        <Month
          background={currentMemory.primaryColor}
          isActive={isActive}
          month={currentMemory.month}
        />
      </Container>
    ),
    [currentMemory, dispatch, isActive, translatedMemories, year]
  );
};
