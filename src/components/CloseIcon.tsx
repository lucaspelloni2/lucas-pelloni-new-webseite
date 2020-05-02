import React from "react";
import styled from "styled-components";
import { __COLORS, getHSLA, SPACING } from "../Layout/Theme";
import { Icon, IconTypes } from "./Icon";

const SIZE = 45;
const Container = styled.div`
  &:hover {
    background: ${getHSLA(0.6, __COLORS.WHITE)};
  }
  transition: 0.15s ease-in-out all;
  cursor: pointer;
  background: ${getHSLA(0.3, __COLORS.WHITE)};
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${SPACING * 1.5}px;
  margin: ${SPACING}px;
  z-index: 1;
  align-self: flex-end;
`;

const Close = styled(Icon)`
  width: 100%;
  height: 100%;
`;
export const CloseIcon = () => {
  return (
    <Container>
      <Close name={IconTypes.CLOSE} color={__COLORS.WHITE} />
    </Container>
  );
};
