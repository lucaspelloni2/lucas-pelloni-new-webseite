import React, { ImgHTMLAttributes } from "react";
import styled from "styled-components";

const Image = styled.img``;

type Props = { name: string } & ImgHTMLAttributes<HTMLImageElement>;

export const Illustration = ({ name, ...props }: Props) => {
  return <Image src={`/assets/illustrations/${name}`} {...props} />;
};
