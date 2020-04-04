import {ActionTypes, SetCurrentPage} from "./types";
import {PageType} from "../../types/PageType";

export const setCurrentPage = (currentPage: PageType): SetCurrentPage => {
  return {
    type: ActionTypes.SET_CURRENT_PAGE,
    currentPage
  };
};
