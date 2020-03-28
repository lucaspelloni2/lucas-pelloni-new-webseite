import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { HomeTitle } from "./HomeTitle";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { Illustration } from "../../components/Illustrations";
import { __COLORS, getAlphaColor, SPACING } from "../../Layout/Theme";
import { useInterval } from "../../components/useInterval";
import { ColorPicker } from "./ColorPicker";
import { v1 as uuidv1 } from "uuid";
import { HomeColor } from "./Color";

const Container = styled(PageContainer)`
  flex-direction: row;
`;

const TextContainer = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${SPACING * 5}px;
`;

const IllustrationContainer = styled(FlexBox)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const fadeIn = keyframes`
  from {
  opacity: 0;   
  transform: translateX(0);
  }
  to {
  opacity: 1;
    transform: translateX(-${SPACING * 8}px);
  }
`;

const Image = styled(Illustration)`
  animation: 2s ${fadeIn} forwards;
  max-width: 600px;
  height: auto;
  transition: 1s ease-in-out all;
  padding: ${SPACING * 2}px;
  position: absolute;
`;

const CircleContainer = styled.div`
  position: absolute;
  top: -${SPACING * 15}px;
  right: -${SPACING * 15}px;
`;

const SIZE = 850;
const INTERVAL = 3000;

const Circle = styled.div<{ selectedColor?: string; color: string }>`
  clip-path: circle(50% at 50% 50%);
  width: ${SIZE}px;
  height: ${SIZE}px;
  transition: ${props => (props.selectedColor ? INTERVAL / 10 : INTERVAL)}ms
    ease-in-out all;
  background: ${props =>
    props.selectedColor || getAlphaColor(0.7, props.color)};
`;

const colors = [__COLORS.SECONDARY, __COLORS.FIFTH, __COLORS.TERTIARY];

export const Home = () => {
  const [randomColor, setRandomColor] = useState(colors[0]);
  const [selectedColor, setColor] = useState<null | HomeColor>(null);
  const homeColors = colors.map(c => ({ background: c, id: uuidv1() }));
  const [hover, setHover] = useState(false);

  useInterval(() => {
    const nextIndex = (colors.indexOf(randomColor) + 1) % colors.length;
    setRandomColor(colors[nextIndex]);
  }, INTERVAL);

  useEffect(() => {
    if (!hover) {
      setColor(null);
    }
  }, [hover]);

  return (
    <Container>
      {hover && (
        <ColorPicker
          onMouseEnter={() => setHover(true)}
          onSelectColor={(id: string) =>
            setColor(homeColors.filter(h => h.id === id)[0])
          }
          colors={homeColors}
        />
      )}
      <CircleContainer>
        <Circle
          selectedColor={selectedColor?.background}
          color={randomColor}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </CircleContainer>
      <TextContainer flex={1}>
        <HomeTitle />
      </TextContainer>

      <IllustrationContainer flex={1}>
        <Image
          name={"home.png"}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </IllustrationContainer>
    </Container>
  );
};
