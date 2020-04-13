import { ActionTypes, Shuffle } from "./types";

export const shuffle = (): Shuffle => {
  return {
    type: ActionTypes.SHUFFLE
  };
};
