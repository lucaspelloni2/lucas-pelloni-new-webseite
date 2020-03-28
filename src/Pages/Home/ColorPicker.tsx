import React, { DOMAttributes } from "react";
import styled, { keyframes } from "styled-components";
import {
  __COLORS,
  __GRAY_SCALE,
  getAlphaColor,
  SPACING
} from "../../Layout/Theme";
import { Color, HomeColor } from "./Color";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../reducers/darkMode/actions";

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
}
`;

const Container = styled.div`
  animation: 0.4s ${bounceInRight} forwards;
  background: ${__COLORS.PRIMARY};
  position: absolute;
  right: ${SPACING * 4}px;
  border-radius: 50px;
  z-index: 100000;
  display: flex;
`;

type Props = {
  colors: HomeColor[];
  onSelectColor?: (id: string) => void;
} & DOMAttributes<any>;

export const ColorPicker = ({ colors, onSelectColor, ...props }: Props) => {
  const dispatch = useDispatch();
  return (
    <Container {...props}>
      {colors.map((c: HomeColor) => {
        return <Color key={c.id} color={c} onSelect={onSelectColor} />;
      })}
      <Color
        onSelect={(id: string) => {
          dispatch(toggleDarkMode());
        }}
        isDarkModeElement
        color={{ id: "dark", background: __GRAY_SCALE._800 }}
      />
    </Container>
  );
};
