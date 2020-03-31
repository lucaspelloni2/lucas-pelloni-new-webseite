import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { DarkModestate } from "./darkMode/types";
import darkMode from "./darkMode/reducer";
import selectedColor from "./selectedColor/reducer";
import { SelectedColorState } from "./selectedColor/types";

export type RootState = {
  darkMode: DarkModestate;
  selectedColor: SelectedColorState;
};

const rootReducer = combineReducers({
  darkMode,
  selectedColor
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
