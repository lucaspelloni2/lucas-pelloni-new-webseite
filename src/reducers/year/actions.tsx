import { ActionTypes, SetCurrentYear } from "./types";

export const setCurrentYear = (year: number): SetCurrentYear => {
  return {
    type: ActionTypes.SET_YEAR,
    year
  };
};
