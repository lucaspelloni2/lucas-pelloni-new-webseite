import React from "react";
import styled from "styled-components";
import { SPACING } from "../Layout/Theme";

const Container = styled.div`
  display: flex;
  min-height: 70px;
  position: absolute;
  padding: ${SPACING * 6}px;
  width: 100%;
`;

const HeaderContainer = styled.div``;

export const Header = () => {
  return <Container>Lucas Pelloni.</Container>;
};
