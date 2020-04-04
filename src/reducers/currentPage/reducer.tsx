import { ActionTypes, PageState, SetCurrentPage } from "./types";

const initialState: PageState = {
  page: null
};

const currentPageReducer = (
  state: PageState = initialState,
  action: SetCurrentPage
): PageState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, page: action.currentPage };
    default:
      return state;
  }
};

export default currentPageReducer;
