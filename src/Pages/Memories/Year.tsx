import React, { useMemo } from "react";
import styled from "styled-components";
import { Memories, Memory } from "../../Content";
import { useDispatch } from "react-redux";
import {
  __COLORS,
  DARK_MODE_TRANSITION,
  getHSLA,
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

type Props = {
  memories: Memory[];
  year: number;
};
export const Year = ({ year }: Props) => {
  const dispatch = useDispatch();
  const { currentMemory, translatedMemories } = useAppState(s => s.memory);
  const { translation } = useAppState(s => s.translation);
  const isActive = currentMemory.year === year;

  return useMemo(
    () => (
      <Container
        isActive={isActive}
        onClick={() => {
          const destination = translatedMemories.find(m => m.year === year);
          console.log(
            "translation destination",
            destination,
            "now ",
            translation
          );
          dispatch(setNumberTranslation(Number(destination?.translation) * -1));
          dispatch(setCurrentMemory(destination || currentMemory));
        }}
        background={currentMemory.primaryColor}
      >
        <Label>{year}</Label>
      </Container>
    ),
    [currentMemory, dispatch, isActive, translation, year]
  );
};
