import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Memory, Picture } from "../../Content";
import { MemoryImage } from "./MemoryImage";
import { Button } from "../../components/Button";
import {PAGE_WIDTH} from "../../Layout/Theme";

const Images = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

type Props = {
  memory: Memory;
};

const MyButton = styled(Button)`
  z-index: 10000;
`;

export const MemoryImages = ({ memory }: Props) => {
  const { achievement } = memory;
  const { pictures } = achievement;

  const [pictureTranslation, setPictureTranslation] = useState(0);

  const next = useCallback(() => {
    setPictureTranslation(s => s - PAGE_WIDTH);
  }, []);
  const prev = useCallback(() => {
    setPictureTranslation(s => s + PAGE_WIDTH);
  }, []);

  return (
    <Images>
      <MyButton onClick={prev}>PREV</MyButton>
      {pictures.map((picture: Picture, index: number) => {
        return (
          <MemoryImage
            key={picture.src}
            picture={picture}
            pictureTranslation={pictureTranslation + index * PAGE_WIDTH}
          />
        );
      })}
      <MyButton onClick={next}>NEXT</MyButton>
    </Images>
  );
};
