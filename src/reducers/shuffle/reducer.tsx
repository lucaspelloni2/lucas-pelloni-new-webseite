import { ActionTypes, Shuffle, ShuffleState } from "./types";

export const INITIAL_COUNTER = 25;
export const EASTER_EGG_LIMIT = 50;

const initialState: ShuffleState = {
  timer: INITIAL_COUNTER
};

const shuffleReducer = (
  state: ShuffleState = initialState,
  action: Shuffle
): ShuffleState => {
  switch (action.type) {
    case ActionTypes.SHUFFLE:
      return {
        ...state,
        timer: state.timer < EASTER_EGG_LIMIT ? state.timer + 1 : state.timer
      };
    default:
      return state;
  }
};

export default shuffleReducer;
