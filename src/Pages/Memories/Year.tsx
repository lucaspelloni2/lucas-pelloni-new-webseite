import React from "react";
import styled from "styled-components";
import { Memory } from "../../Content";
import { Month } from "./Month";
import { v1 } from "uuid";
import { useDispatch } from "react-redux";
import { setCurrentYear } from "../../reducers/year/actions";
import {
  __COLORS,
  COLOR_TRANSITION,
  DARK_MODE_TRANSITION,
  getAlphaColor,
  getHSLA,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";

const Container = styled.div<{ isDarkMode: boolean; isActive: boolean }>`
  &:hover {
    background-color: ${getHSLA(0.6, __COLORS.PRIMARY)};
  }
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.15s ease-in-out all;
  width: 100%;
  background-color: ${props =>
    getHSLA(props.isActive ? 0.6 : 0.25, __COLORS.PRIMARY)};
  justify-content: center;
  align-items: center;
  height: ${YEAR_HEIGHT}px;
  margin: 1px 0;
`;

const Label = styled.h1<{ isDarkMode: boolean }>`
  font-size: 26px;
  font-weight: 300;
  transition: ${DARK_MODE_TRANSITION};
  color: ${props => (props.isDarkMode ? __COLORS.WHITE : "#222")};
`;

type Props = {
  memories: Memory[];
  year: number;
};
export const Year = ({ year, memories }: Props) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { currentYear } = useAppState(s => s.year);
  const isActive = currentYear === year;
  return (
    <Container
      isActive={isActive}
      onClick={() => dispatch(setCurrentYear(year))}
      isDarkMode={isDarkMode}
    >
      <Label isDarkMode={isDarkMode}>{year}</Label>
    </Container>
  );
};
