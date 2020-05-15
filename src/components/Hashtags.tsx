import React from "react";
import styled from "styled-components";
import { Hashtag } from "../Content";
import { MyHashtag } from "./Hashtag";
import { v1 } from "uuid";
import { SPACING } from "../Layout/Theme";
import {MEDIUM_DEVICES} from "../Layout/Mobile";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING * 1.5}px;
  ${MEDIUM_DEVICES`
   justify-content: space-between; 
   `}
`;

type Props = {
  hashtags: Hashtag[];
  color: string;
};
export const Hashtags = ({ hashtags, color }: Props) => {
  return (
    <Container>
      {hashtags.map(h => {
        return <MyHashtag key={v1()} hashtag={h} color={color} />;
      })}
    </Container>
  );
};
