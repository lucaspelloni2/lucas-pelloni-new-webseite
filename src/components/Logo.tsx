import React from "react";
import styled from "styled-components";
import { SPACING } from "../Layout/Theme";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING / 1.5}px;
`;

const Span = styled.span`
  font-size: 28px;
  font-weight: 700;
`;

export const Logo = () => {
  return (
    <Container>
      <Span>Lucas.</Span>
    </Container>
  );
};
