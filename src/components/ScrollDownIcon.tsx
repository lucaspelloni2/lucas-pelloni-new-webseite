import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { __COLORS, DARK_MODE_TRANSITION, SPACING } from "../Layout/Theme";
import { Icon, IconTypes } from "./Icon";
import { useTextColor } from "../hooks/useTextColor";
import { setTranslation } from "../reducers/translation/actions";
import { Direction } from "../reducers/translation/types";
import { useDispatch } from "react-redux";
import { useImageSection } from "../hooks/useImageSection";
import useAppState from "../reducers/useAppState";
import { MEDIUM_DEVICES } from "../Layout/Mobile";

const SIZE = SPACING * 6;

const move = keyframes`
    0% {
      transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    } 50% {
     transform: translateY(${SPACING / 2}px);
     opacity: 1;
    } 100% {
     transform: translateY(-${SPACING / 4}px);
      opacity: 0.75;
    }
`;

const Circle = styled.div<{ color: string }>`
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  padding: ${SPACING * 1.5}px;
  justify-content: center;
  transition: ${DARK_MODE_TRANSITION};
  left: -${SIZE / 2}px;
  z-index: 100;
  bottom: ${SPACING * 4}px;
  border: 1px solid ${props => props.color};
  align-items: center;
  cursor: pointer;
  margin-bottom: ${SPACING * 2}px;
`;

const MyIcon = styled(Icon)`
  animation: 1.5s ${move} infinite;
`;

const DownIconWrapper = styled.div<{ isLeftPanelOpen: boolean }>`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  left: 49%;
  z-index: ${props => (props.isLeftPanelOpen ? -1 : 100)};
  ${MEDIUM_DEVICES`display: none`};
`;

export const ScrollDownIcon = () => {
  const { color } = useTextColor();
  const dispatch = useDispatch();
  const { isLeftPanelOpen } = useAppState(s => s.memory);
  const { isImageSection } = useImageSection();

  return useMemo(
    () => (
      <DownIconWrapper isLeftPanelOpen={isLeftPanelOpen}>
        <Circle
          color={isImageSection ? __COLORS.WHITE : color}
          onClick={() => dispatch(setTranslation(Direction.DOWN))}
        >
          <MyIcon
            color={isImageSection ? __COLORS.WHITE : color}
            name={IconTypes.ARROW_DOWN}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </Circle>
      </DownIconWrapper>
    ),
    [color, dispatch, isImageSection, isLeftPanelOpen]
  );
};
