import React, { useMemo } from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { useDispatch } from "react-redux";
import {
  __COLORS,
  DARK_MODE_TRANSITION,
  getHSLA,
  PAGE_TRANSITION,
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
`;

const Month = styled.div<{ background: string; isActive: boolean }>`
  position: absolute;
  pointer-events: none;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: ${PAGE_TRANSITION};
  cursor: default;
  font-weight: 700;
  color: ${__COLORS.WHITE};
  letter-spacing: 0.5px;
  font-size: 14px;
  border-radius: 10px;
  text-transform: uppercase;
  padding: ${SPACING / 2}px ${SPACING}px;
  background-color: ${props => getHSLA(0.75, props.background)};
  box-shadow: 0 2px 10px 5px ${props => getHSLA(0.2, props.background)} !important;
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
        <Month background={currentMemory.primaryColor} isActive={isActive}>
          {currentMemory.month}
        </Month>
        <Label>{year}</Label>
      </Container>
    ),
    [currentMemory, dispatch, isActive, translatedMemories, year]
  );
};
