import {Memory} from "../../Content";
import {
  ActionTypes,
  GoToNextImage,
  GoToPrevImage,
  SetCurrentImageIndex,
  SetCurrentMemory,
  ToggleLeftPanel
} from "./types";

export const setCurrentMemory = (memory: Memory): SetCurrentMemory => {
  return {
    type: ActionTypes.SET_MEMORY,
    memory
  };
};

export const toggleLeftPanel = (): ToggleLeftPanel => ({
  type: ActionTypes.TOGGLE_LEFT_PANEL
});

export const setCurrentImageIndex = (index: number): SetCurrentImageIndex => ({
  type: ActionTypes.SET_CURRENT_IMAGE_INDEX,
  index
});

export const goToNextImage = (): GoToNextImage => ({
  type: ActionTypes.GO_TO_NEXT_IMAGE
});

export const goToPrevImage = (): GoToPrevImage => ({
  type: ActionTypes.GO_TO_PREV_IMAGE
});
