import { ActionTypes, RefType, ScrollToRef, ScrollToRefState } from "./types";

const initialState: ScrollToRefState = {
  lastScrolledRef: RefType.HOME
};

const scrollToRefReducer = (
  state: ScrollToRefState = initialState,
  action: ScrollToRef
): ScrollToRefState => {
  switch (action.type) {
    case ActionTypes.SCROLL_TO_REF:
      return { ...state, lastScrolledRef: action.refType };
    default:
      return state;
  }
};

export default scrollToRefReducer;
