import styled from "styled-components";
import { __GRAY_SCALE, COLOR_TRANSITION, SPACING } from "./Theme";
import {EXTRA_SMALL_DEVICES, LARGE_DEVICES, MEDIUM_DEVICES, SMALL_DEVICES} from "./Mobile";

export const Title = styled.h1`
  font-size: 58px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: 300;
  color: ${__GRAY_SCALE._700};
    ${LARGE_DEVICES`
     font-size: 24px;
    `};
  ${MEDIUM_DEVICES`
     font-size: 22px;
    `};
  ${EXTRA_SMALL_DEVICES`
     font-size: 20px;
    `};
`;

export const HomeBigTitle = styled(Title)`
  font-size: 60px;
  ${LARGE_DEVICES`
     font-size: 48px;
    `};
  ${MEDIUM_DEVICES`
     font-size: 42px;
    `};
  ${EXTRA_SMALL_DEVICES`
     font-size: 36px;
    `};
`;

export const HomeSubTitle = styled(SubTitle)`
  margin-top: -${SPACING * 2}px;
  font-weight: 100;
`;

export const ColoredSpan = styled.span<{ color: string }>`
  color: ${props => props.color};
  transition: ${COLOR_TRANSITION};
`;

export const Link = styled.a<{ color?: string }>`
  &:hover:after {
    width: 100%;
  }
  :after {
    content: "";
    width: 0px;
    height: 2px;
    display: block;
    background: ${props => props.color || "inherit"};
    transition: ${COLOR_TRANSITION};
  }
  display: inline-block;
  color: ${props => props.color || "inherit"};
  text-decoration: none;
  cursor: pointer;
`;
