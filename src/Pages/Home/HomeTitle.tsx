import React from "react";
import { SubTitle, Title } from "../../Layout/Typography";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE, SPACING } from "../../Layout/Theme";
import { Icon, IconTypes } from "../../components/Icon";
import useAppState from "../../reducers/useAppState";

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



export const HomeTitle = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
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
          I{" "}
          <Icon
            name={IconTypes.LOVE}
            color={
              selectedColor === __COLORS.TERTIARY
                ? __COLORS.SECONDARY
                : __COLORS.TERTIARY
            }
            style={{
              transition: "inherit",
              width: SPACING * 6,
              height: SPACING * 6,
              marginBottom: -8
            }}
          />
        </Colored>{" "}
        to build beautiful products with modern{" "}
        <Colored color={selectedColor || __COLORS.FIFTH}>
          User Interfaces.
        </Colored>
      </MyTitle>
      <MySubTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </MySubTitle>
    </Titles>
  );
};
