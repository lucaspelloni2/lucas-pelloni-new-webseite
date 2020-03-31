import { ActionTypes, SelectColor } from "./types";

export const setColor = (color: string): SelectColor => {
  return {
    type: ActionTypes.SELECT_COLOR,
    color
  };
};
