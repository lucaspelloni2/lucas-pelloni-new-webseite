import React from "react";
import styled from "styled-components";
import { SPACING } from "../Layout/Theme";
import { Logo } from "./Logo";
import { FlexBox } from "../Layout/styled/FlexBox";

const Container = styled.div`
  display: flex;
  min-height: 70px;
  align-items: center;
  width: 100%;
`;

const Item = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 0 ${SPACING * 2}px;
`;

export const Header = () => {
  return (
    <Container>
      <Logo />
      <div style={{ width: SPACING * 5 }} />
      <Item>My Story</Item>
      <Item>Contact me</Item>
    </Container>
  );
};
