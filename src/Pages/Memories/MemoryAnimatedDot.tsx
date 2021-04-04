import {Flex} from "axelra-styled-bootstrap-grid";
import React, {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import styled, {css, keyframes} from "styled-components";
import {CIRCLE, getAlphaColor, SPACING, __COLORS} from "../../Layout/Theme";
import {
  goToNextImage,
  setCurrentImageIndex
} from "../../reducers/memory/actions";

const DOT_SIZE = 14;
const BAR_WIDTH = DOT_SIZE * 5;
const ANIMATION_DURATION_IN_MS = 7000;

const shared = css`
  cursor: pointer;
  margin: 0 ${SPACING / 2}px;
  background-color: ${getAlphaColor(0.3, __COLORS.WHITE)};
`;

const sharedBar = css`
  width: ${BAR_WIDTH}px;
  height: ${DOT_SIZE}px;
  border-radius: ${DOT_SIZE / 2}px;
`;

const ActiveBar = styled.div`
  ${shared};
  ${sharedBar};
  overflow: hidden;
  position: relative;
`;

const animation = keyframes`
  0% {
    transform: translateX(-${BAR_WIDTH - DOT_SIZE}px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const AnimatedBar = styled.div`
  ::after {
    position: absolute;
    content: " ";
    right: 0;
    top: 0;
    background-color: ${__COLORS.WHITE};
    ${CIRCLE(DOT_SIZE)};
  }
  ${sharedBar};
  height: 100%;
  background-color: ${getAlphaColor(0.5, __COLORS.WHITE)};
  position: absolute;
  left: 0;
  top: 0;
  animation: ${animation} ${ANIMATION_DURATION_IN_MS}ms ease-in-out;
`;

const InactiveDot = styled.div`
  ${shared};
  ${CIRCLE(DOT_SIZE)};
`;

type Props = {
  active: boolean;
  index: number;
};

export const MemoryAnimatedDot = ({active, index}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timer = 0;
    if (active) {
      timer = setTimeout(
        () => (active ? dispatch(goToNextImage()) : void 0),
        ANIMATION_DURATION_IN_MS + 200
      );
    }
    return () => clearTimeout(timer);
  }, [active, dispatch]);

  const click = useCallback(() => {
    dispatch(setCurrentImageIndex(index));
  }, [dispatch, index]);

  return (
    <Flex align="center" row>
      {active ? (
        <ActiveBar>
          <AnimatedBar />
        </ActiveBar>
      ) : (
        <InactiveDot onClick={click} />
      )}
    </Flex>
  );
};
