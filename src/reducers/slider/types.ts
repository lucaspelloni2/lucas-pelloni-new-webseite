export enum ActionTypes {
  SET_SLIDER_VALUE = "SET_SLIDER_VALUE"
}

/**
 * Action Types
 */
export type SetSlidervalue = {
  type: ActionTypes.SET_SLIDER_VALUE;
  value: number;
};

/**
 * State Type
 */
export type SliderState = {
  value: number;
};
