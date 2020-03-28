import React, { useCallback } from "react";
import styled from "styled-components";
import { __COLORS, getAlphaColor, SPACING } from "../../Layout/Theme";
import { Icon, IconTypes } from "../../components/Icon";

const SIZE = 25;

const Container = styled.div<{ color: string }>`
  &:first-child {
    margin-left: ${SPACING / 2}px;
  }
  width: ${SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.color};
  height: ${SIZE}px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: ${SPACING / 2}px;
  margin-bottom: ${SPACING / 2}px;
  margin-right: ${SPACING / 2}px;
`;

export type HomeColor = {
  background: string;
  id: string;
};

type Props = {
  onSelect?: (id: string) => void;
  isDarkModeElement?: boolean;
  color: HomeColor;
};
export const Color = ({ onSelect, color, isDarkModeElement }: Props) => {
  const callback = useCallback(() => {
    onSelect?.(color.id);
  }, [color.id, onSelect]);
  return !isDarkModeElement ? (
    <Container onClick={callback} color={color.background} />
  ) : (
    <Container color={color.background} style={{ padding: SPACING / 4 }}>
      <Icon
        color={__COLORS.WHITE}
        name={IconTypes.DARK_MODE}
        style={{ width: 14, height: 14 }}
      />
    </Container>
  );
};
