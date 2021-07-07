import React, {useEffect, useMemo} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {MemoryLeftPanel} from "../../components/MemoryLeftPanel";
import {ScrollDownIcon} from "../../components/ScrollDownIcon";
import {Memory} from "../../Content";
import {useIsFocused} from "../../hooks/use-is-focused";
import {MEDIUM_DEVICES} from "../../Layout/Mobile";
import {FlexBox} from "../../Layout/styled/FlexBox";
import {PageContainer} from "../../Layout/styled/PageContainer";
import {PAGE_WIDTH} from "../../Layout/Theme";
import {setCurrentImageIndex} from "../../reducers/memory/actions";
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
  const dispatch = useDispatch();
  const isFocused = useIsFocused(memory);

  useEffect(() => {
    if (isFocused) {
      dispatch(setCurrentImageIndex(0));
    }
  }, [dispatch, isFocused]);

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
