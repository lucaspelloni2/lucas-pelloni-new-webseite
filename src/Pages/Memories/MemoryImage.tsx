import React from "react";
import styled from "styled-components";
import { Picture } from "../../Content";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { MEMORY_LEFT_PANEL_WIDTH, YEAR_HEIGHT } from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";

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

const Img = styled.div<{ url: string }>`
  background: ${props => `url(${props.url}) no-repeat center center fixed`};
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
`;

type Props = {
  picture: Picture;
};
export const MemoryImage = ({ picture }: Props) => {
  const { grouped } = useAppState(s => s.year);
  return (
    <>
      <FlexBox flex={1}>
        <Img url={picture.src} />
      </FlexBox>
      <BlurWrapper height={YEAR_HEIGHT * grouped.length}>
        <Blur url={picture.src} />
      </BlurWrapper>
    </>
  );
};
