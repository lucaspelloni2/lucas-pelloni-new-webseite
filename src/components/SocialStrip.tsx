import React, { useMemo } from "react";
import styled from "styled-components";
import { Icon, IconTypes } from "./Icon";
import { __COLORS, SPACING } from "../Layout/Theme";
import { useTextColor } from "../hooks/useTextColor";

const Container = styled.div`
  display: flex;
`;

const SocialIcon = styled(Icon)<{ size: number; fill: string; hover: string }>`
  &:hover {
    transform: scale(1.04);
    fill: ${props => props.hover};
  }
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  fill: ${props => props.fill};
  margin: 0 ${SPACING * 2}px;
`;

export const SocialStrip = () => {
  const { color } = useTextColor();
  const SIZE = 50;
  return useMemo(
    () => (
      <Container>
        <SocialIcon
          fill={color}
          name={IconTypes.GITHUB}
          size={SIZE}
          hover={__COLORS.FIFTH}
        />
        <SocialIcon
          fill={color}
          name={IconTypes.LINKEDIN}
          size={SIZE}
          hover={__COLORS.SECONDARY}
        />
        <SocialIcon
          fill={color}
          name={IconTypes.GOOGLE_SCHOLAR}
          size={SIZE}
          hover={__COLORS.TERTIARY}
        />
      </Container>
    ),
    [color]
  );
};
