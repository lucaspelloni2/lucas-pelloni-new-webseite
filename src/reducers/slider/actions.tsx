import { ActionTypes, SetSlidervalue } from "./types";

export const setSliderValue = (value: number): SetSlidervalue => {
  return {
    type: ActionTypes.SET_SLIDER_VALUE,
    value
  };
};
