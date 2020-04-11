import { ActionTypes, Direction, SetTranslation } from "./types";

export const setTranslation = (direction: Direction | null): SetTranslation => {
  return {
    type: ActionTypes.SET_TRANSLATION,
    direction
  };
};
