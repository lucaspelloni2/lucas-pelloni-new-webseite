import React from "react";
import styled from "styled-components";
import {Memory} from "../../Content";
import {MemoryImage} from "./MemoryImage";

const Images = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

type Props = {
  memory: Memory;
};

export const MemoryImages = ({ memory }: Props) => {
  const { achievement } = memory;
  const { pictures } = achievement;
  return (
    <Images>
      {pictures.map(picture => {
        return <MemoryImage key={picture.src} picture={picture} />;
      })}
    </Images>
  );
};
