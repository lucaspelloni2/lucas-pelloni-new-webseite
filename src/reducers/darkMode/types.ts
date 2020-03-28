

export enum ActionTypes {
  TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE"
}

/**
 * Action Types
 */
export type ToggleDarkMode = {
  type: ActionTypes.TOGGLE_DARK_MODE;
};

/**
 * State Type
 */
export type DarkModestate = {
  isDarkMode: boolean;
};
