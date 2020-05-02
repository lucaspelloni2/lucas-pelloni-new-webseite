import React, { ReactNode, useCallback } from "react";
import styled from "styled-components";
import { __COLORS, getHSLA, SPACING } from "../Layout/Theme";
import { linearGradient } from "polished";

type Props = {
  children: ReactNode;
  secondary?: boolean;
  background?: string;
  backgroundHover?: string;
  className?: string;
  onClick?: () => void;
};

const Container = styled.div<{
  secondary?: boolean;
  background?: string;
  backgroundHover?: string;
}>`
  padding: ${SPACING * 1.5}px ${SPACING * 4}px;
  border-radius: 6px;
  display: flex;
  font-size: 20px;
  z-index: 10;
  align-items: center;
  font-weight: 700;
  color: ${__COLORS.WHITE};
  cursor: pointer;
  box-shadow: 0 2px 10px 5px
    ${props => getHSLA(0.12, props.background || __COLORS.TERTIARY)} !important;
  background: ${props =>
    linearGradient({
      colorStops: [
        props.background || __COLORS.TERTIARY,
        props.backgroundHover || props.background || __COLORS.TERTIARY_HOVER
      ],
      toDirection: "to right",
      fallback: props.background
    })};
`;
export const Button = ({
  children,
  secondary,
  background,
  backgroundHover,
  onClick,
  className
}: Props) => {
  const onClickCallback = useCallback(() => onClick?.(), [onClick]);
  return (
    <Container
      className={className}
      onClick={onClickCallback}
      secondary={secondary}
      background={background}
      backgroundHover={backgroundHover}
    >
      {children}
    </Container>
  );
};
