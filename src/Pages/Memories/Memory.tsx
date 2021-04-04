import React, {useMemo} from "react";
import styled from "styled-components";
import {MemoryLeftPanel} from "../../components/MemoryLeftPanel";
import {ScrollDownIcon} from "../../components/ScrollDownIcon";
import {Memory} from "../../Content";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {FlexBox} from "../../Layout/styled/FlexBox";
import {PageContainer} from "../../Layout/styled/PageContainer";
import {PAGE_WIDTH} from "../../Layout/Theme";
import useAppState from "../../reducers/useAppState";
import {MemoryImages} from "./MemoryImages";
import {MemoryTextSection} from "./MemoryTextSection";

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
  ${MEDIUM_DEVICES`
    flex-direction: column;`}
`;

const ContentWrapper = styled(FlexBox)`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageWrapper = styled(FlexBox)`
  ${MEDIUM_DEVICES`
    flex: 0;`}
`;

type Props = {
  memory: Memory;
};
export const MemoryScreen = ({memory}: Props) => {
  const {currentImageIndex: currentIndex} = useAppState(st => st.memory);
  const pictureTranslation = useMemo(() => currentIndex * PAGE_WIDTH * -1, [
    currentIndex
  ]);

  return (
    <Container>
      <MemoryLeftPanel />
      <ImageWrapper flex={1}>
        {useMemo(
          () => (
            <MemoryImages
              memory={memory}
              pictureTranslation={pictureTranslation}
            />
          ),
          [memory, pictureTranslation]
        )}
      </ImageWrapper>
      <ContentWrapper flex={1}>
        <MemoryTextSection memory={memory} />
      </ContentWrapper>
      <ScrollDownIcon />
    </Container>
  );
};
