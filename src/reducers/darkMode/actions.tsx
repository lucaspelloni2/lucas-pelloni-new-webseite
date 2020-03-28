import { ActionTypes, ToggleDarkMode } from "./types";

export const toggleDarkMode = (): ToggleDarkMode => {
  return {
    type: ActionTypes.TOGGLE_DARK_MODE
  };
};
