export enum ActionTypes {
  SCROLL_TO_REF = "SCROLL_TO_REF"
}

export enum RefType {
  HOME = "HOME",
  STORY = "STORY"
}

/**
 * Action Types
 */
export type ScrollToRef = {
  type: ActionTypes.SCROLL_TO_REF;
  refType: RefType;
};

/**
 * State Type
 */
export type ScrollToRefState = {
  lastScrolledRef: RefType;
};
