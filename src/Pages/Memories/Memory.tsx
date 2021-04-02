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

  const [pictureTranslation, setPictureTranslation] = useState(0);
  const totalPictures = memory.achievement.pictures.length;

  const next = useCallback(() => {
    setPictureTranslation(s =>
      s === (totalPictures - 1) * PAGE_WIDTH * -1 ? 0 : s - PAGE_WIDTH
    );
  }, [totalPictures]);
  const prev = useCallback(() => {
    setPictureTranslation(s =>
      s === 0 ? (totalPictures - 1) * PAGE_WIDTH * -1 : s + PAGE_WIDTH
    );
  }, [totalPictures]);

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
      <ContentWrapper flex={1}>
        {useMemo(
          () => (
            <MemoryTextSection memory={memory} />
          ),
          [memory]
        )}
      </ContentWrapper>
      <ScrollDownIcon />
    </Container>
  );
};
