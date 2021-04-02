import {Memory} from "../../Content";

export enum ActionTypes {
  SET_MEMORY = "SET_MEMORY",
  TOGGLE_LEFT_PANEL = "TOGGLE_LEFT_PANEL"
}

export type SetCurrentMemory = {
  type: ActionTypes.SET_MEMORY;
  memory: Memory;
};

export type ToggleLeftPanel = {
  type: ActionTypes.TOGGLE_LEFT_PANEL;
};
/**
 * State Type
 */
export type YearState = {
  currentMemory: Memory;
  isLeftPanelOpen: boolean;
  grouped: Memory[][];
  translatedMemories: Memory[];
};
