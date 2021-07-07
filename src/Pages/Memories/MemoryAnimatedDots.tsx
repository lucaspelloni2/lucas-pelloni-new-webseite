import {Flex} from "axelra-styled-bootstrap-grid";
import React, {useMemo} from "react";
import {Picture} from "../../Content";
import {MemoryAnimatedDot} from "./MemoryAnimatedDot";

type Props = {
  pictures: Picture[];
};
export const MemoryAnimatedDots = ({pictures}: Props) => {
  return (
    <Flex row align="center">
      {useMemo(
        () =>
          pictures.map((p, index) => (
            <MemoryAnimatedDot key={String(`p-${p.src}`)} index={index} />
          )),
        [pictures]
      )}
    </Flex>
  );
};
