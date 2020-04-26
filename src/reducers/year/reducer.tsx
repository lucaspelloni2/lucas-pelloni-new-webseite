import {
  ActionTypes,
  SetCurrentMonth,
  SetCurrentYear,
  YearState
} from "./types";
import _ from "lodash";
import { Memories, Memory } from "../../Content";

const initialState: YearState = {
  currentYear: Memories[0].year,
  currentMonth: Memories[0].month,
  grouped: _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value()
};

const yearReducer = (
  state: YearState = initialState,
  action: SetCurrentYear | SetCurrentMonth
): YearState => {
  switch (action.type) {
    case ActionTypes.SET_YEAR:
      return {
        ...state,
        currentYear: action.year
      };
    case ActionTypes.SET_MONTH:
      return {
        ...state,
        currentMonth: action.month
      };
    default:
      return state;
  }
};

export default yearReducer;