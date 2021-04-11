import {Flex} from "axelra-styled-bootstrap-grid";
import React from "react";
import styled from "styled-components";
import {useTextColor} from "../../hooks/useTextColor";
import {__COLORS} from "../../Layout/Theme";
import {ColoredSpan, HomeBigTitle, HomeSubTitle} from "../../Layout/Typography";
import useAppState from "../../reducers/useAppState";

const Title = styled(HomeBigTitle)`
  text-align: right;
`;

const SubTitle = styled(HomeSubTitle)`
  text-align: right;
`;

export const SecondHomeTitle = () => {
  const {selectedColor} = useAppState(s => s.selectedColor);
  const {color} = useTextColor();
  return (
    <Flex column>
      <Title>
        Let{" "}
        <ColoredSpan
          color={
            selectedColor === __COLORS.TERTIARY
              ? __COLORS.SECONDARY
              : __COLORS.TERTIARY
          }
        >
          me
        </ColoredSpan>{" "}
        introduce myself. <br />I am{" "}
        <ColoredSpan color={selectedColor}>Lucas</ColoredSpan>, and this is
        <br />
        <ColoredSpan color={__COLORS.FOURTH}>the story of my life.</ColoredSpan>
      </Title>
      <SubTitle color={color}>Let's start the Journey.</SubTitle>
    </Flex>
  );
};
