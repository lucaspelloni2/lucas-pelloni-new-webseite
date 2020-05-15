import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { PageContainer } from "../../Layout/styled/PageContainer";
import { FlexBox } from "../../Layout/styled/FlexBox";
import { Memory } from "../../Content";
import { useNormalizedTransition } from "../../hooks/useNormalizedTransition";
import { useDispatch } from "react-redux";
import { setCurrentMemory } from "../../reducers/memory/actions";
import { MemoryTextSection } from "./MemoryTextSection";
import { MemoryImages } from "./MemoryImages";
import { ScrollDownIcon } from "../../components/ScrollDownIcon";
import { MemoryLeftPanel } from "../../components/MemoryLeftPanel";
import { MEDIUM_DEVICES } from "../../Layout/Mobile";

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0;
  ${MEDIUM_DEVICES`
    flex-direction: column;`}
`;

const ContentWrapper = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
`;

type Props = {
  memory: Memory;
  isActive: boolean;
};
export const MemoryScreen = ({ memory, isActive }: Props) => {
  const { translation } = useNormalizedTransition();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive && translation) {
      dispatch(setCurrentMemory(memory));
    }
  }, [translation, isActive, dispatch, memory]);

  return (
    <Container>
      {useMemo(
        () => (
          <>{isActive && <MemoryLeftPanel isActive={isActive} />}</>
        ),
        [isActive]
      )}
      <FlexBox flex={1}>
        {useMemo(
          () => (
            <MemoryImages memory={memory} />
          ),
          [memory]
        )}
      </FlexBox>
      <ContentWrapper>
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
