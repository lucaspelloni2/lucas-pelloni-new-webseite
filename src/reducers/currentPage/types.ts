import { PageType } from "../../types/PageType";

export enum ActionTypes {
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
}

/**
 * Action Types
 */
export type SetCurrentPage = {
  type: ActionTypes.SET_CURRENT_PAGE;
  currentPage: PageType;
};

/**
 * State Type
 */
export type PageState = {
  page: PageType | null;
};
