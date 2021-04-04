import {Flex} from "axelra-styled-bootstrap-grid";
import React, {useMemo} from "react";
import {Picture} from "../../Content";
import {MemoryAnimatedDot} from "./MemoryAnimatedDot";

type Props = {
  pictures: Picture[];
  current: number;
};
export const MemoryAnimatedDots = ({pictures, current}: Props) => {
  return (
    <Flex row align="center">
      {useMemo(
        () =>
          pictures.map((p, index) => (
            <MemoryAnimatedDot
              key={String(`p-${p.src}`)}
              active={index === current}
              index={index}
            />
          )),
        [current, pictures]
      )}
    </Flex>
  );
};
