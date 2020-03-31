import { ActionTypes, SelectColor, SelectedColorState } from "./types";
import { getRandomColor } from "../../Layout/Theme";

const initialState: SelectedColorState = {
  selectedColor: getRandomColor()
};

const selectColorReducer = (
  state: SelectedColorState = initialState,
  action: SelectColor
): SelectedColorState => {
  switch (action.type) {
    case ActionTypes.SELECT_COLOR:
      return { ...state, selectedColor: action.color };
    default:
      return state;
  }
};

export default selectColorReducer;
