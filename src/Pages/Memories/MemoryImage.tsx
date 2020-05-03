import React from "react";
import styled from "styled-components";
import {Picture} from "../../Content";
import {
  CIRCLE_TRANSITION,
  MEMORY_RIGHT_PANEL_WIDTH,
  PAGE_HEIGHT,
  PAGE_WIDTH,
  YEAR_HEIGHT
} from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";

const BlurWrapper = styled.div<{ height: number; translation: number }>`
  align-self: flex-end;
  height: ${props => props.height}px;
  width: ${MEMORY_RIGHT_PANEL_WIDTH}px;
  position: absolute;
  right: 0;
  transform: ${props => `translateX(${props.translation}%)`};
  transition: ${CIRCLE_TRANSITION};
`;
const Blur = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  background-size: cover;
  height: 100%;
  width: 100%;
  filter: blur(7px);
`;

const Img = styled.div<{ url: string; translation: number }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  height: ${PAGE_HEIGHT}%;
  width: ${PAGE_WIDTH}%;
  position: absolute;
  transform: ${props => `translateX(${props.translation}%)`};
  background-size: cover;
  transition: ${CIRCLE_TRANSITION};
`;

type Props = {
  picture: Picture;
  pictureTranslation: number;
};
export const MemoryImage = ({picture, pictureTranslation}: Props) => {
  const {grouped} = useAppState(s => s.memory);
  return (
    <>
      <Img url={picture.src} translation={pictureTranslation}/>
      <BlurWrapper
        height={YEAR_HEIGHT * grouped.length}
        translation={pictureTranslation}
      >
        <Blur url={picture.src}/>
      </BlurWrapper>
    </>
  );
};
