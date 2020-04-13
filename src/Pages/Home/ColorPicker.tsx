import React, { DOMAttributes } from "react";
import styled, { keyframes } from "styled-components";
import {
  __COLORS,
  __GRAY_SCALE,
  DARK_MODE_TRANSITION,
  getColors,
  SPACING
} from "../../Layout/Theme";
import { Color } from "./Color";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../reducers/darkMode/actions";
import { setColor } from "../../reducers/selectedColor/actions";
import useAppState from "../../reducers/useAppState";
import {useNormalizedTransition} from "../../hooks/useNormalizedTransition";

const bounceInRight = keyframes`
from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(200px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const ColorPickerContainer = styled.div<{ isDarkMode: boolean }>`
  animation: 0.5s ${bounceInRight} forwards;
  transition: ${DARK_MODE_TRANSITION};
  background: ${__COLORS.PRIMARY};
  border: 1px solid ${props =>
    props.isDarkMode ? __GRAY_SCALE._700 : "transparent"};
  position: fixed;
  top: ${SPACING * 5}px;
  right: ${SPACING * 4}px;
  border-radius: 50px;
  z-index: 100000;
  display: flex;
`;

type Props = {} & DOMAttributes<any>;

export const ColorPicker = ({ ...props }: Props) => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { translation } = useNormalizedTransition();
  const dispatch = useDispatch();
  const colors = getColors();
  return (
    <ColorPickerContainer {...props} isDarkMode={isDarkMode}>
      {translation }
      {colors.map((c: string) => {
        return (
          <Color
            key={c}
            color={c}
            onSelect={(c: string) => {
              dispatch(setColor(c));
            }}
          />
        );
      })}
      <Color
        onSelect={(c: string) => {
          dispatch(toggleDarkMode());
        }}
        isDarkModeElement
        color={__GRAY_SCALE._800}
      />
    </ColorPickerContainer>
  );
};
