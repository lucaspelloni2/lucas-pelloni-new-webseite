import {Flex} from "axelra-styled-bootstrap-grid";
import React from "react";
import {Picture} from "../../Content";
import {MemoryAnimatedDot} from "./MemoryAnimatedDot";

type Props = {
  pictures: Picture[];
  current: number;
  isActive: boolean;
};
export const MemoryAnimatedDots = ({pictures, current, isActive}: Props) => {
  return (
    <Flex row align="center">
      {pictures.map((p, index) => (
        <MemoryAnimatedDot
          key={String(`p-${p}`)}
          active={index === current && isActive}
          index={index}
        />
      ))}
    </Flex>
  );
};
