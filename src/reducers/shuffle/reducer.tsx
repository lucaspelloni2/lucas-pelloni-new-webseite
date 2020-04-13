import { ActionTypes, Shuffle, ShuffleState } from "./types";

const initialState: ShuffleState = {
  timer: 100
};

const shuffleReducer = (
  state: ShuffleState = initialState,
  action: Shuffle
): ShuffleState => {
  switch (action.type) {
    case ActionTypes.SHUFFLE:
      return {
        ...state,
        timer: state.timer < 100 ? state.timer + 1 : state.timer
      };
    default:
      return state;
  }
};

export default shuffleReducer;
