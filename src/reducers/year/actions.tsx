import { ActionTypes, SetCurrentMonth, SetCurrentYear } from "./types";
import { MONTHS } from "../../Content";

export const setCurrentYear = (year: number): SetCurrentYear => {
  return {
    type: ActionTypes.SET_YEAR,
    year
  };
};

export const setCurrentMonth = (month: MONTHS): SetCurrentMonth => {
  return {
    type: ActionTypes.SET_MONTH,
    month
  };
};
