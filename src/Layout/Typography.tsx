import styled from "styled-components";
import {__GRAY_SCALE, SPACING} from "./Theme";

export const Title = styled.h1`
  font-size: 58px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  font-size: 26px;
  font-weight: 300;
`;


export const HomeBigTitle = styled(Title)`
  font-size: 60px;
`;

export const HomeSubTitle = styled(SubTitle)`
  margin-top: -${SPACING * 2}px;
  color: ${__GRAY_SCALE._700};
  font-weight: 100;
`;
