import React from "react";
import styled from "styled-components";
import { __COLORS } from "../Layout/Theme";

const ColoredSpan = styled.span<{
  isColored: boolean;
  firstWordColor?: string;
}>`
  color: ${props => (props.isColored ? props.firstWordColor : __COLORS.WHITE)};
`;

type Props = {
  text: string;
  firstWordColor?: string;
};
export const ColoredText = ({ text, firstWordColor }: Props) => {
  return (
    <span>
      {text.split(" ").map((t, i: number) => (
        <ColoredSpan
          isColored={i === 0}
          firstWordColor={firstWordColor}
          key={t}
        >
          {t}{" "}
        </ColoredSpan>
      ))}
    </span>
  );
};
