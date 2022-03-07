import {linearGradient} from "polished";
import React, {ReactNode, useCallback} from "react";
import styled from "styled-components";
import {MEDIUM_DEVICES} from "../Layout/Mobile";
import {COLOR_TRANSITION, getHSLA, SPACING, __COLORS} from "../Layout/Theme";

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
  &:hover::after {
    transform: scale(1.1);
  }
  &:hover {
    background: ${props =>
      props.secondary
        ? getHSLA(0.1, props.background || __COLORS.TERTIARY_HOVER)
        : linearGradient({
            colorStops: [
              props.background || __COLORS.TERTIARY,
              props.backgroundHover ||
                props.background ||
                __COLORS.TERTIARY_HOVER
            ],
            toDirection: "to right",
            fallback: props.background
          })};
  }
  &::after {
    background-color:   background: ${props =>
      props.secondary
        ? "inherit"
        : linearGradient({
            colorStops: [
              props.background || __COLORS.TERTIARY,
              props.backgroundHover ||
                props.background ||
                __COLORS.TERTIARY_HOVER
            ],
            toDirection: "to right",
            fallback: props.background
          })};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: inherit;
    transition: transform 350ms;
  }
  position: relative;
  padding: ${SPACING * 1.5}px ${SPACING * 4}px;
  border-radius: 6px;
  transition: ${COLOR_TRANSITION};
  display: flex;
  font-size: 20px;
  border: 1px solid
    ${props => (props.secondary ? props.background : "transparent")};
  align-items: center;
  z-index: 1000;
  font-weight: ${props => (props.secondary ? 100 : 700)};
  color: ${props => (props.secondary ? props.background : __COLORS.WHITE)};
  cursor: pointer;
  box-shadow: 0 2px 10px 5px
    ${props => getHSLA(0.12, props.background || __COLORS.TERTIARY)} !important;
  background: ${props =>
    props.secondary
      ? "inherit"
      : linearGradient({
          colorStops: [
            props.background || __COLORS.TERTIARY,
            props.backgroundHover || props.background || __COLORS.TERTIARY_HOVER
          ],
          toDirection: "to right",
          fallback: props.background
        })};
  ${MEDIUM_DEVICES`
    width: 100%;
    border-radius: 0; 
    display: flex;
    justify-content: center;
    align-items: center;`}
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
