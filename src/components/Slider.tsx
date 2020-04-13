import React from "react";
import styled from "styled-components";
import { ColorPickerContainer } from "../Pages/Home/ColorPicker";
import useAppState from "../reducers/useAppState";
import {
  __COLORS,
  DARK_MODE_TRANSITION,
  getAlphaColor,
  SPACING
} from "../Layout/Theme";
import { useDispatch } from "react-redux";
import { setSliderValue } from "../reducers/slider/actions";
import { useTheme } from "../hooks/useTheme";

const Container = styled(ColorPickerContainer)`
  top: ${SPACING * 11}px;
  background: ${__COLORS.WHITE};
  border: none;
  margin-right: ${SPACING / 4}px;
`;

const InputSlider = styled.input<{
  ballSize: number;
  color: string;
  background: string;
  animated: number;
}>`
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${props => props.ballSize}px;
    border-radius: 50%;
    height: ${props => props.ballSize}px;
    background: ${props => props.background};
    border: 3px solid ${__COLORS.SECONDARY};
    transition: ${DARK_MODE_TRANSITION};
    transform: scale(1 + ${props => props.animated / 10});
  }
  &::-moz-focus-outer {
    border: 0;
  }
  transition: ${DARK_MODE_TRANSITION};
  -webkit-appearance: none;
  border: none;
  width: 120px;
  height: 3px;
  border-radius: 15px;
  background: ${props => props.color};
  outline: none;
`;

type Props = {
  ballSize?: number;
};

export const Slider = ({ ballSize }: Props) => {
  const dispatch = useDispatch();
  const { color, background } = useTheme();
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { value } = useAppState(s => s.slider);
  return (
    <Container isDarkMode={isDarkMode}>
      <InputSlider
        background={background}
        color={color}
        type="range"
        min="1"
        max="100"
        animated={value}
        value={value}
        ballSize={ballSize || 20}
        onChange={e => {
          const v = Number(e.target.value);
          dispatch(setSliderValue(v));
        }}
      />
    </Container>
  );
};
