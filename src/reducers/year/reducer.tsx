import { ActionTypes, SetCurrentYear, YearState } from "./types";
import _ from "lodash";
import { Memories, Memory } from "../../Content";

const initialState: YearState = {
  currentYear: 2019,
  grouped: _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value()
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
