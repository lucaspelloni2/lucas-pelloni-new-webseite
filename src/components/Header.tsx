import React, { useMemo } from "react";
import styled from "styled-components";
import { getAlphaColor, SPACING } from "../Layout/Theme";
import { Logo } from "./Logo";
import { FlexBox } from "../Layout/styled/FlexBox";
import { useTextColor } from "../hooks/useTextColor";
import { useDispatch } from "react-redux";
import { setTranslation } from "../reducers/translation/actions";
import { Direction } from "../reducers/translation/types";

const Container = styled.div`
  display: flex;
  min-height: 70px;
  align-items: center;
  width: 100%;
`;

const Item = styled.a<{ color: string }>`
  &:hover:after {
    width: 100%;
    transition: 0.2s ease-in-out all;
  }
  &:after {
    content: " ";
    position: absolute;
    height: 1px;
    bottom: -${SPACING / 2}px;
    left: 0;
    width: 0;
    margin: 2px 0;
    background: ${props => getAlphaColor(0.5, props.color)};
  }
  color: ${props => props.color};
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  cursor: pointer;
  margin: 0 ${SPACING * 2}px;
`;

export const Header = () => {
  const { color } = useTextColor();
  const dispatch = useDispatch();
  return useMemo(
    () => (
      <Container>
        <Logo />
        <FlexBox flex={1} />
        <Item
          color={color}
          onClick={() => dispatch(setTranslation(Direction.DOWN))}
        >
          My Story
        </Item>
        <Item
          color={color}
          href="mailto:email@lucas.pelloni@axelra.com?subject=Hello!"
        >
          Contact me
        </Item>
      </Container>
    ),
    [color, dispatch]
  );
};
