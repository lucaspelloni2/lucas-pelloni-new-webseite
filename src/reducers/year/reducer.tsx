import { ActionTypes, SetCurrentMemory, YearState } from "./types";
import _ from "lodash";
import { Memories, Memory } from "../../Content";

const initialState: YearState = {
  currentMemory: Memories[0],
  grouped: _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value()
};

const yearReducer = (
  state: YearState = initialState,
  action: SetCurrentMemory
): YearState => {
  switch (action.type) {
    case ActionTypes.SET_MEMORY:
      return {
        ...state,
        currentMemory: action.memory
      };
    default:
      return state;
  }
};

export default yearReducer;
