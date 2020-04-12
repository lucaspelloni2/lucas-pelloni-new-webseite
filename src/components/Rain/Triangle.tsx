import React from "react";
import styled from "styled-components";

const SVG = styled.svg``;

type Props = {
  color: string;
  size?: number;
};

export const Triangle = ({ color, size }: Props) => {
  return (
    <SVG width={size} height={size} viewBox="0 0 62 62" version="1.1">
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
