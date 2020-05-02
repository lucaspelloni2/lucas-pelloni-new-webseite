import React from "react";
import styled from "styled-components";
import { Hashtag } from "../Content";
import { __COLORS, getHSLA, SPACING } from "../Layout/Theme";

const Container = styled.div<{ background: string }>`
  &:hover {
    background: ${props => getHSLA(0.75, props.background)};
  }
  padding: ${SPACING / 4}px ${SPACING}px;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  transition: 0.15s ease-in-out all;
  background: ${props => getHSLA(0.5, props.background)};
  color: ${__COLORS.WHITE};
  letter-spacing: 0.5px;
  text-transform: lowercase;
  font-size: 12px;
  box-shadow: 0 2px 10px 5px ${props => getHSLA(0.12, props.background)} !important;
  margin-right: ${SPACING / 1.5}px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${__COLORS.WHITE};
`;

type Props = {
  hashtag: Hashtag;
  color: string;
};
export const MyHashtag = ({ hashtag, color }: Props) => {
  const { title } = hashtag;
  return (
    <Container background={color}>
      <Link
        href={`https://www.instagram.com/explore/tags/${title}`}
        target="_blank"
      >
        #{title}
      </Link>
    </Container>
  );
};
