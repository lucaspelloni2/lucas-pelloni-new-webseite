import { Memory, MONTHS } from "../../Content";

export enum ActionTypes {
  SET_YEAR = "SET_YEAR",
  SET_MONTH = "SET_MONTH"
}

/**
 * Action Types
 */
export type SetCurrentYear = {
  type: ActionTypes.SET_YEAR;
  year: number;
};

export type SetCurrentMonth = {
  type: ActionTypes.SET_MONTH;
  month: MONTHS;
};

/**
 * State Type
 */
export type YearState = {
  currentYear: number;
  currentMonth: MONTHS;
  grouped: Memory[][];
};
