import { ActionTypes, SetSlidervalue, SliderState } from "./types";

const initialState: SliderState = {
  value: 30
};

const sliderReducer = (
  state: SliderState = initialState,
  action: SetSlidervalue
): SliderState => {
  switch (action.type) {
    case ActionTypes.SET_SLIDER_VALUE:
      return {
        ...state,
        value: action.value
      };
    default:
      return state;
  }
};

export default sliderReducer;
