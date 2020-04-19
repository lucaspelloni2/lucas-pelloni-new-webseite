import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { DarkModestate } from "./darkMode/types";
import darkMode from "./darkMode/reducer";
import selectedColor from "./selectedColor/reducer";
import currentPage from "./currentPage/reducer";
import translation from "./translation/reducer";
import slider from "./slider/reducer";
import shuffle from "./shuffle/reducer";
import year from "./year/reducer";
import { SelectedColorState } from "./selectedColor/types";
import { PageState } from "./currentPage/types";
import { TranslationState } from "./translation/types";
import { SliderState } from "./slider/types";
import { ShuffleState } from "./shuffle/types";
import { YearState } from "./year/types";

export type RootState = {
  darkMode: DarkModestate;
  selectedColor: SelectedColorState;
  currentPage: PageState;
  translation: TranslationState;
  slider: SliderState;
  shuffle: ShuffleState;
  year: YearState;
};

const rootReducer = combineReducers({
  darkMode,
  selectedColor,
  currentPage,
  translation,
  slider,
  shuffle,
  year
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
