import {
  ActionTypes,
  SetCurrentMemory,
  ToggleLeftPanel,
  YearState
} from "./types";
import _ from "lodash";
import { Memories, Memory } from "../../Content";

const initialState: YearState = {
  isLeftPanelOpen: false,
  currentMemory: Memories[0],
  grouped: _(Memories)
    .groupBy((e: Memory) => Number(e.year))
    .orderBy(year => Number(year), "desc")
    .value()
};

const memoryReducer = (
  state: YearState = initialState,
  action: SetCurrentMemory | ToggleLeftPanel
): YearState => {
  switch (action.type) {
    case ActionTypes.SET_MEMORY:
      return {
        ...state,
        currentMemory: action.memory
      };
    case ActionTypes.TOGGLE_LEFT_PANEL:
      return {
        ...state,
        isLeftPanelOpen: !state.isLeftPanelOpen
      };
    default:
      return state;
  }
};

export default memoryReducer;
