export enum ActionTypes {
  SET_YEAR = "SET_YEAR"
}

/**
 * Action Types
 */
export type SetCurrentYear = {
  type: ActionTypes.SET_YEAR;
  year: number;
};

/**
 * State Type
 */
export type YearState = {
  currentYear: number;
};
