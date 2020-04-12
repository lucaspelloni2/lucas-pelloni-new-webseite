import React from "react";
import styled from "styled-components";

const SVG = styled.svg``;

type Props = {
  color: string;
  size?: number;
};

export const Square = ({ color, size }: Props) => {
  return (
    <SVG width={size} height={size} viewBox="0 0 62 62" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="square"
          transform="translate(0.000000, -0.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <polygon
            id="path62"
            points="30.6666659 1.59999991e-06 0.134666663 32.7520008 32.8866658 63.2853334 63.4186651 30.5320008"
          />
        </g>
      </g>
    </SVG>
  );
};
