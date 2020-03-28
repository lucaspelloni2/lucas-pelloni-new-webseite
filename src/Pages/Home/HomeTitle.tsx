import React from "react";
import { SubTitle, Title } from "../../Layout/Typography";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE, SPACING } from "../../Layout/Theme";

const Colored = styled.span<{ color: string }>`
  color: ${props => props.color};
  transition: 0.3s ease-in-out all;
`;
const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyTitle = styled(Title)`
  font-size: 60px;
`;

const MySubTitle = styled(SubTitle)`
  margin-top: -${SPACING * 2}px;
  color: ${__GRAY_SCALE._700};
  font-weight: 100;
`;

type Props = {
  selectedColor?: string;
};

export const HomeTitle = ({ selectedColor }: Props) => {
  return (
    <Titles>
      <MyTitle>
        <Colored
          color={
            selectedColor === __COLORS.TERTIARY
              ? __COLORS.SECONDARY
              : __COLORS.TERTIARY
          }
        >
          I Love
        </Colored>{" "}
        to build beautiful Products with modern{" "}
        <Colored color={selectedColor || __COLORS.FIFTH}>
          User Interfaces.
        </Colored>
      </MyTitle>
      <MySubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
        consequatur, consequuntur est explicabo hic impedit in neque.
      </MySubTitle>
    </Titles>
  );
};
