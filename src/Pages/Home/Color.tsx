import React, { useCallback } from "react";
import styled from "styled-components";
import { SPACING } from "../../Layout/Theme";

const SIZE = 25;

const Container = styled.div<{ color: string }>`
  &:first-child {
    margin-left: ${SPACING / 2}px;
  }
  width: ${SIZE}px;
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
  color: HomeColor;
};
export const Color = ({ onSelect, color }: Props) => {
  const callback = useCallback(() => {
    onSelect?.(color.id);
  }, [color.id, onSelect]);
  return <Container onClick={callback} color={color.background} />;
};
