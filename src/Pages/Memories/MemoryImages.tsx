import React, {useMemo} from "react";
import styled from "styled-components";
import {Memory, Picture} from "../../Content";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {PAGE_WIDTH} from "../../Layout/Theme";
import {MemoryImage} from "./MemoryImage";

const Images = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: flex-start;
  ${MEDIUM_DEVICES`height: 40vh;`}
`;

type Props = {
  memory: Memory;
  pictureTranslation: number;
};

export const MemoryImages = ({memory, pictureTranslation}: Props) => {
  const {achievement} = memory;
  const {pictures} = achievement;

  return useMemo(
    () => (
      <Images>
        {pictures.map((picture: Picture, i: number) => {
          return (
            <MemoryImage
              key={picture.src}
              picture={picture}
              pictureTranslation={pictureTranslation + i * PAGE_WIDTH}
            />
          );
        })}
      </Images>
    ),
    [pictureTranslation, pictures]
  );
};
