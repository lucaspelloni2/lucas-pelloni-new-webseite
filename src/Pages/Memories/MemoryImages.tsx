import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { MEMORY_LEFT_PANEL_WIDTH, YEAR_HEIGHT } from "../../Layout/Theme";
import { Memory } from "../../Content";
import useAppState from "../../reducers/useAppState";

const Img = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
`;

const Images = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const BlurWrapper = styled.div<{ height: number }>`
  align-self: flex-end;
  height: ${props => props.height}px;
  width: ${MEMORY_LEFT_PANEL_WIDTH}px;
`;
const Blur = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  background-size: cover;
  height: 100%;
  width: 100%;
  filter: blur(7px);
`;

type Props = {
  memory: Memory;
};

export const MemoryImages = ({ memory }: Props) => {
  const { grouped } = useAppState(s => s.year);
  const { achievement } = memory;
  return (
    <Images>
      <FlexBox flex={1}>
        <Img url={achievement.pictures[0].src} />
      </FlexBox>
      <BlurWrapper height={YEAR_HEIGHT * grouped.length}>
        <Blur url={achievement.pictures[0].src} />
      </BlurWrapper>
    </Images>
  );
};
