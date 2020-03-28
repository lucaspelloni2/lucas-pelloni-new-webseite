import { ActionTypes, DarkModestate, ToggleDarkMode } from "./types";

const initialState: DarkModestate = {
  isDarkMode: false
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
