export enum ActionTypes {
  SELECT_COLOR = "SELECT_COLOR"
}

/**
 * Action Types
 */
export type SelectColor = {
  type: ActionTypes.SELECT_COLOR;
  color: string;
};

/**
 * State Type
 */
export type SelectedColorState = {
  selectedColor: string;
};
