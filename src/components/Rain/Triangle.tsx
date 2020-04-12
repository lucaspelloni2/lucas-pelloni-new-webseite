import React from "react";
import styled from "styled-components";

const SVG = styled.svg``;

type Props = {
  color: string;
  size?: number;
};

export const Triangle = ({ color, size }: Props) => {
  return (
    <SVG width={size} height={size} viewBox="0 0 62 54" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="line"
          transform="translate(-8.000000, -2.000000)"
          fill={color}
          fillRule="nonzero"
        >
          <path
            d="M2.23666701,34.9755603 C1.96466701,35.8675603 1.91666701,36.8395602 2.14733367,37.8115602 C2.83933366,40.7342268 5.76733358,42.5422268 8.69000018,41.8488934 L72.5486652,26.7288938 C75.4713318,26.0395605 77.2806651,23.1075606 76.5859985,20.1862273 C75.8953318,17.2635607 72.9659986,15.4555608 70.043332,16.1475608 L6.18600024,31.2688937 C4.23533362,31.7288937 2.78200033,33.1875603 2.23666701,34.9755603"
            id="path94"
            transform="translate(39.367240, 28.998476) rotate(-27.000000) translate(-39.367240, -28.998476) "
          ></path>
        </g>
      </g>
    </SVG>
  );
};
