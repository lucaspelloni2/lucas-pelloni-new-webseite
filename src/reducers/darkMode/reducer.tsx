import { ActionTypes, DarkModestate, ToggleDarkMode } from "./types";

const hours = new Date().getTime();

const initialState: DarkModestate = {
  isDarkMode: hours > 17 || hours < 6
};

const darkModeReducer = (
  state: DarkModestate = initialState,
  action: ToggleDarkMode
): DarkModestate => {
  switch (action.type) {
    case ActionTypes.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default darkModeReducer;
