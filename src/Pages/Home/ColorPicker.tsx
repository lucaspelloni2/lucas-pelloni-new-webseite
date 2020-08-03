import React, { DOMAttributes, useMemo } from "react";
import styled from "styled-components";
import {
  __COLORS,
  __GRAY_SCALE,
  AnimatedOpacityContainer,
  getColors,
  PAGE_TRANSITION,
  PageDimensions,
  SPACING
} from "../../Layout/Theme";
import { Color } from "./Color";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../reducers/darkMode/actions";
import { setColor } from "../../reducers/selectedColor/actions";
import useAppState from "../../reducers/useAppState";
import { shuffle } from "../../reducers/shuffle/actions";
import { Counter } from "../../components/Counter";

export const ColorPickerContainer = styled(AnimatedOpacityContainer).attrs(
  ({ translation }: any) => ({
    style: {
      transform: `translate(0, ${translation}vh)`
    }
  })
)<{
  isDarkMode: boolean;
  visible: boolean;
  translation: number;
}>`
  transition: ${PAGE_TRANSITION};
  background: ${__COLORS.PRIMARY};
  border: 1px solid
    ${props => (props.isDarkMode ? __GRAY_SCALE._700 : "transparent")};
  position: fixed;
  border-radius: 50px;
  top: ${SPACING * 5}px;
  right: ${SPACING * 4}px;
  z-index: 4;
  display: flex;
`;

type Props = { visible: boolean } & DOMAttributes<any>;

export const ColorPicker = ({ ...props }: Props) => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  const { translation } = useAppState(s => s.translation);
  const dispatch = useDispatch();
  const colors = getColors();
  return useMemo(
    () => (
      <ColorPickerContainer
        {...props}
        translation={translation * -1}
        isDarkMode={isDarkMode}
        visible={props.visible}
      >
        {colors.map((c: string) => {
          return (
            <Color
              visible={translation < PageDimensions[2]}
              key={c}
              color={c}
              onSelect={(c: string) => {
                dispatch(setColor(c));
              }}
            />
          );
        })}
        <Counter />
        <Color
          visible={translation === PageDimensions[2]}
          onSelect={(c: string) => {
            dispatch(shuffle());
          }}
          isShuffle
          color={__GRAY_SCALE._800}
        />
        <Color
          visible
          onSelect={(c: string) => {
            dispatch(toggleDarkMode());
          }}
          isDarkModeElement
          color={__GRAY_SCALE._800}
        />
      </ColorPickerContainer>
    ),
    [colors, dispatch, isDarkMode, props, translation]
  );
};
