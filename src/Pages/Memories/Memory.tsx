import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {MemoryLeftPanel} from "../../components/MemoryLeftPanel";
import {ScrollDownIcon} from "../../components/ScrollDownIcon";
import {Memory} from "../../Content";
import {useNormalizedTransition} from "../../hooks/useNormalizedTransition";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {FlexBox} from "../../Layout/styled/FlexBox";
import {PageContainer} from "../../Layout/styled/PageContainer";
import {PAGE_WIDTH} from "../../Layout/Theme";
import {setCurrentMemory} from "../../reducers/memory/actions";
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
  isActive: boolean;
};
export const MemoryScreen = ({memory, isActive}: Props) => {
  const {translation} = useNormalizedTransition();
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = memory.achievement.pictures.length;

  const next = useCallback(() => {
    if (currentIndex === totalPictures - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, totalPictures]);
  const prev = useCallback(() => {
    if (currentIndex === 0) {
      setCurrentIndex(totalPictures - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex, totalPictures]);

  const pictureTranslation = useMemo(() => currentIndex * PAGE_WIDTH * -1, [
    currentIndex
  ]);

  useEffect(() => {
    if (isActive && translation) {
      dispatch(setCurrentMemory(memory));
    }
  }, [translation, isActive, dispatch, memory]);

  return (
    <Container>
      {useMemo(() => isActive && <MemoryLeftPanel />, [isActive])}
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
      <div
        onClick={prev}
        style={{position: "absolute", background: "red", zIndex: 1024124}}
      >
        prev
      </div>
      <div
        onClick={next}
        style={{
          position: "absolute",
          top: 40,
          background: "green",
          zIndex: 1024124
        }}
      >
        nexg
      </div>

      <ContentWrapper flex={1}>
        {useMemo(
          () => (
            <MemoryTextSection
              memory={memory}
              pictureTranslation={pictureTranslation}
            />
          ),
          [memory, pictureTranslation]
        )}
      </ContentWrapper>
      <ScrollDownIcon />
    </Container>
  );
};
