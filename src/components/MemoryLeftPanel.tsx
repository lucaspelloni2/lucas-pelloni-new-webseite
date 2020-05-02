import React from "react";
import styled from "styled-components";
import {
  __COLORS,
  MEMORY_LEFT_PANEL_WIDTH,
  MEMORY_RIGHT_PANEL_WIDTH
} from "../Layout/Theme";
import { Icon } from "./Icon";
import { CloseIcon } from "./CloseIcon";

const Container = styled.div`
  width: ${MEMORY_LEFT_PANEL_WIDTH};
  background: ${__COLORS.WHITE};
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 30%;
  background: red;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  min-height: 100px;
  background: blue;
`;

export const MemoryLeftPanel = () => {
  return (
    <Container>
      <Header>
        <CloseIcon />
      </Header>
      <Body />
      <Footer />
    </Container>
  );
};
