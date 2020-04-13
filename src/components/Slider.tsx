import React from "react";
import styled from "styled-components";
import { ColorPickerContainer } from "../Pages/Home/ColorPicker";
import useAppState from "../reducers/useAppState";
import { SPACING } from "../Layout/Theme";
import { useDispatch } from "react-redux";
import { setSliderValue } from "../reducers/slider/actions";

const Container = styled(ColorPickerContainer)`
  top: ${SPACING * 11}px;
`;

const InputSlider = styled.input``;

export const Slider = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { value } = useAppState(s => s.slider);
  return (
    <Container isDarkMode={isDarkMode}>
      <InputSlider
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={e => {
          const v = Number(e.target.value);
          dispatch(setSliderValue(v));
        }}
      />
    </Container>
  );
};
