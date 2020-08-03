import React from "react";
import styled from "styled-components";
import { Picture } from "../../Content";
import { CIRCLE_TRANSITION, PAGE_HEIGHT, PAGE_WIDTH } from "../../Layout/Theme";

const Img = styled.div<{ url: string; translation: number }>`
  background: ${props => `url(${props.url}) no-repeat center center`};
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
export const MemoryImage = ({ picture, pictureTranslation }: Props) => {
  return (
    <>
      <Img url={picture.src} translation={pictureTranslation} />
    </>
  );
};
