import styled from "styled-components";
import { __GRAY_SCALE, COLOR_TRANSITION, SPACING } from "./Theme";

export const Title = styled.h1`
  font-size: 58px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: 300;
  color: ${__GRAY_SCALE._700};
`;

export const HomeBigTitle = styled(Title)`
  font-size: 60px;
`;

export const HomeSubTitle = styled(SubTitle)`
  margin-top: -${SPACING * 2}px;
  font-weight: 100;
`;

export const ColoredSpan = styled.span<{ color: string }>`
  color: ${props => props.color};
  transition: ${COLOR_TRANSITION};
`;
