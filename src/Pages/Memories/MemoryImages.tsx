import React, { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { Memory, Picture } from "../../Content";
import { MemoryImage } from "./MemoryImage";
import { PAGE_WIDTH } from "../../Layout/Theme";
import { CarouselArrow } from "../../components/CarouselArrow";
import { MEDIUM_DEVICES } from "../../Layout/Mobile";

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
};

export const MemoryImages = ({ memory }: Props) => {
  const { achievement } = memory;
  const { pictures } = achievement;

  const [pictureTranslation, setPictureTranslation] = useState(0);
  const totalPictures = pictures.length;

  const next = useCallback(() => {
    setPictureTranslation(s =>
      s === (totalPictures - 1) * PAGE_WIDTH * -1 ? 0 : s - PAGE_WIDTH
    );
  }, [totalPictures]);
  const prev = useCallback(() => {
    setPictureTranslation(s =>
      s === 0 ? (totalPictures - 1) * PAGE_WIDTH * -1 : s + PAGE_WIDTH
    );
  }, [totalPictures]);

  return useMemo(
    () => (
      <Images>
        {pictures.length > 0 && (
          <CarouselArrow left memory={memory} onClick={prev} />
        )}
        {pictures.map((picture: Picture, index: number) => {
          return (
            <MemoryImage
              key={picture.src}
              picture={picture}
              pictureTranslation={pictureTranslation + index * PAGE_WIDTH}
            />
          );
        })}
        {pictures.length > 0 && (
          <CarouselArrow memory={memory} onClick={next} />
        )}
      </Images>
    ),
    [memory, next, pictureTranslation, pictures, prev]
  );
};
