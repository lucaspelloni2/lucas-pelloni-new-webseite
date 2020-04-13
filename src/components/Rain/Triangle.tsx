import React from "react";
import styled from "styled-components";

const SVG = styled.svg<{ rotate?: string }>`
  transform: rotate(${props => props.rotate || 0}deg);
`;

type Props = {
  color: string;
  size?: number;
  rotate?: string;
};

export const Triangle = ({ color, size, rotate }: Props) => {
  return (
    <SVG
      width={size}
      height={size}
      viewBox="0 0 62 62"
      version="1.1"
      rotate={rotate}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <polygon
          id="path70"
          fill={color}
          fillRule="nonzero"
          points="42.9308 0.329209408 0.0654677642 25.0092088 46.1774666 55.5345414"
        />
      </g>
    </SVG>
  );
};
