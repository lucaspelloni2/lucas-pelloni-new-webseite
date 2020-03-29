import { ActionTypes, RefType, ScrollToRef } from "./types";

export const scrollToRef = (refType: RefType): ScrollToRef => {
  return {
    type: ActionTypes.SCROLL_TO_REF,
    refType
  };
};
