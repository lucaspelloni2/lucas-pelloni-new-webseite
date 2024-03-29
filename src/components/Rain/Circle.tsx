import React from "react";
import styled from "styled-components";

const SVG = styled.svg<{ rotate?: string }>`
  transform: rotate(${props => props.rotate || 0}deg);
`;

type Props = {
  color: string;
  rotate?: string;
  size?: number;
};

export const Circle = ({ color, size, rotate }: Props) => {
  return (
    <SVG width={size} height={size} viewBox="0 0 62 62" version="1.1" rotate={rotate}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M30.6666659,52.8306653 C18.0306662,52.8306653 7.75066647,42.5506656 7.75066647,29.9146659 C7.75066647,17.2799995 18.0306662,6.9999998 30.6666659,6.9999998 C43.3026656,6.9999998 53.5826653,17.2799995 53.5826653,29.9146659 C53.5826653,42.5506656 43.3026656,52.8306653 30.6666659,52.8306653 M30.6666659,0.173333304 C14.2666663,0.173333304 0.923999977,13.5159996 0.923999977,29.9146659 C0.923999977,46.3146655 14.2666663,59.6573318 30.6666659,59.6573318 C47.0666655,59.6573318 60.4079985,46.3146655 60.4079985,29.9146659 C60.4079985,13.5159996 47.0666655,0.173333304 30.6666659,0.173333304"
          id="path50"
          fill={color}
          fillRule="nonzero"
        ></path>
      </g>
    </SVG>
  );
};
