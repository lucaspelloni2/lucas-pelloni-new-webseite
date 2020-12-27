import React from "react";
import styled from "styled-components";
import {Flex} from "axelra-styled-bootstrap-grid";
import {ColoredSpan, HomeBigTitle, HomeSubTitle} from "../../Layout/Typography";
import {
  __COLORS,
  LEFT_PANEL_TRANSITION,
  PAGE_TRANSITION_LINEAR,
  SPACING
} from "../../Layout/Theme";
import {Icon, IconTypes} from "../../components/Icon";
import useAppState from "../../reducers/useAppState";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {useNormalizedTransition} from "../../hooks/useNormalizedTransition";

const TranslatedFlex = styled(Flex)<{t: number}>`
  transform: ${props => `translate3d(-${props.t === 0 ? 0 : 100}%, 0, 0)`};
  opacity: ${props => (props.t === 0 ? 1 : 0)};
  will-change: transform;
  transition: ${PAGE_TRANSITION_LINEAR};
`;
const MyIcon = styled(Icon)`
  width: ${SPACING * 6}px;
  margin-bottom: -8px;
  height: ${SPACING * 6}px;
  transition: inherit;
  ${MEDIUM_DEVICES`
      width: 33px;
      height: 33px;
      margin-bottom:-3px;
    `}
`;
export const HomeTitle = () => {
  const {translation} = useNormalizedTransition();
  const {selectedColor} = useAppState(s => s.selectedColor);
  return (
    <TranslatedFlex column t={translation}>
      <HomeBigTitle>
        <ColoredSpan
          color={
            selectedColor === __COLORS.TERTIARY
              ? __COLORS.SECONDARY
              : __COLORS.TERTIARY
          }
        >
          I{" "}
          <MyIcon
            name={IconTypes.LOVE}
            color={
              selectedColor === __COLORS.TERTIARY
                ? __COLORS.SECONDARY
                : __COLORS.TERTIARY
            }
          />
        </ColoredSpan>{" "}
        to build beautiful products with modern{" "}
        <ColoredSpan color={selectedColor || __COLORS.FIFTH}>
          User Interfaces.
        </ColoredSpan>
      </HomeBigTitle>
      <HomeSubTitle>And any kind of digital product.</HomeSubTitle>
    </TranslatedFlex>
  );
};
