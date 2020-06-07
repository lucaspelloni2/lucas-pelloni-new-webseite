import React from "react";
import styled from "styled-components";
// @ts-ignore
import Vimeo from "@u-wave/react-vimeo";
import useAppState from "../reducers/useAppState";
import YouTube from "react-youtube";

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MyYoutube = styled(YouTube)``;

export const MemoryVideos = () => {
  const { isLeftPanelOpen, currentMemory } = useAppState(s => s.memory);
  const { videos } = currentMemory.achievement;
  return (
    <VideoWrapper>
      {videos &&
        isLeftPanelOpen &&
        videos.map((v, i: number) => {
          return v.isYoutube ? (
            <MyYoutube videoId={String(v.videoId)} id={String(v.videoId)} />
          ) : (
            <Vimeo
              video={v.videoId}
              autoplay={i === 0 && isLeftPanelOpen}
              style={{ display: "flex", justifyContent: "center" }}
            />
          );
        })}
    </VideoWrapper>
  );
};
