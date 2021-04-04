import {Flex} from "axelra-styled-bootstrap-grid";
import React, {useMemo} from "react";
import {Picture} from "../../Content";
import useAppState from "../../reducers/useAppState";
import {MemoryAnimatedDot} from "./MemoryAnimatedDot";

type Props = {
  pictures: Picture[];
};
export const MemoryAnimatedDots = ({pictures}: Props) => {
  const {currentImageIndex} = useAppState(st => st.memory);
  return (
    <Flex row align="center">
      {useMemo(
        () =>
          pictures.map((p, index) => (
            <MemoryAnimatedDot
              key={String(`p-${p.src}`)}
              isActive={index === currentImageIndex}
              index={index}
            />
          )),
        [currentImageIndex, pictures]
      )}
    </Flex>
  );
};
