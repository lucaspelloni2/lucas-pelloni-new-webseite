import {Memory} from "../../Content";

export enum ActionTypes {
  SET_MEMORY = "SET_MEMORY",
  TOGGLE_LEFT_PANEL = "TOGGLE_LEFT_PANEL",
  SET_CURRENT_IMAGE_INDEX = "SET_CURRENT_IMAGE_INDEX",
  GO_TO_NEXT_IMAGE = "GO_TO_NEXT_IMAGE",
  GO_TO_PREV_IMAGE = "GO_TO_PREV_IMAGE"
}

export type SetCurrentMemory = {
  type: ActionTypes.SET_MEMORY;
  memory: Memory;
};

export type ToggleLeftPanel = {
  type: ActionTypes.TOGGLE_LEFT_PANEL;
};

export type SetCurrentImageIndex = {
  type: ActionTypes.SET_CURRENT_IMAGE_INDEX;
  index: number;
};

export type GoToNextImage = {
  type: ActionTypes.GO_TO_NEXT_IMAGE;
};
export type GoToPrevImage = {
  type: ActionTypes.GO_TO_PREV_IMAGE;
};
/**
 * State Type
 */
export type YearState = {
  currentMemory: Memory;
  currentImageIndex: number;
  isLeftPanelOpen: boolean;
  grouped: Memory[][];
  translatedMemories: Memory[];
};
