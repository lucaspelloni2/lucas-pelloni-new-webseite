import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {
  __COLORS,
  CIRCLE_TRANSITION,
  DARK_MODE_TRANSITION,
  SPACING
} from "../../Layout/Theme";
import { Icon, IconTypes } from "../../components/Icon";
import useAppState from "../../reducers/useAppState";

const SIZE = 25;

const Container = styled.div<{ color: string; visible: boolean }>`
  &:first-child {
    margin-left: ${SPACING / 2}px;
  }
  width: ${props => (props.visible ? SIZE : 0)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${props => (props.visible ? 1 : 0)};
  z-index: ${props => (props.visible ? 1 : -1)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  transition: ${DARK_MODE_TRANSITION};
  background: ${props => props.color};
  height: ${SIZE}px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: ${SPACING / 2}px;
  margin-bottom: ${SPACING / 2}px;
  margin-right: ${props => (props.visible ? SPACING / 2 : 0)}px;
`;

type Props = {
  onSelect?: (id: string) => void;
  isDarkModeElement?: boolean;
  color: string;
  visible: boolean;
  isShuffle?: boolean;
};
export const Color = ({
  onSelect,
  color,
  isDarkModeElement,
  isShuffle,
  visible
}: Props) => {
  const [rotation, setRotation] = useState(0);

  const { isDarkMode } = useAppState(s => s.darkMode);
  const callback = useCallback(() => {
    if (isShuffle) {
      setRotation(r => r + 90);
    }
    onSelect?.(color);
  }, [color, isShuffle, onSelect]);
  return !isDarkModeElement && !isShuffle ? (
    <Container onClick={callback} color={color} visible={visible} />
  ) : (
    <Container
      visible={visible}
      onClick={callback}
      color={
        isShuffle ? __COLORS.TERTIARY : isDarkMode ? __COLORS.FOURTH : color
      }
      style={{ padding: visible ? SPACING / 4 : 0 }}
    >
      <Icon
        color={__COLORS.WHITE}
        name={
          isShuffle
            ? IconTypes.SHUFFLE
            : isDarkMode
            ? IconTypes.SUN
            : IconTypes.DARK_MODE
        }
        style={{ width: 14, height: 14, transform: `rotate(${rotation}deg)` }}
      />
    </Container>
  );
};
