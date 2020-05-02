import { ActionTypes, SetCurrentMemory, ToggleLeftPanel } from "./types";
import { Memory } from "../../Content";

export const setCurrentMemory = (memory: Memory): SetCurrentMemory => {
  return {
    type: ActionTypes.SET_MEMORY,
    memory
  };
};

export const toggleLeftPanel = (): ToggleLeftPanel => ({
  type: ActionTypes.TOGGLE_LEFT_PANEL
});
