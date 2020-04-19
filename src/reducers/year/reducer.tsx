import { ActionTypes, SetCurrentYear, YearState } from "./types";

const initialState: YearState = {
  currentYear: 2019
};

const yearReducer = (
  state: YearState = initialState,
  action: SetCurrentYear
): YearState => {
  switch (action.type) {
    case ActionTypes.SET_YEAR:
      return {
        ...state,
        currentYear: action.year
      };
    default:
      return state;
  }
};

export default yearReducer;
