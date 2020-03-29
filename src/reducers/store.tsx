import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { DarkModestate } from "./darkMode/types";
import darkMode from "./darkMode/reducer";
import scrollRefs from "./scrollRefs/reducer";
import { ScrollToRefState } from "./scrollRefs/types";

export type RootState = {
  darkMode: DarkModestate;
  scrollRefs: ScrollToRefState;
};

const rootReducer = combineReducers({
  darkMode,
  scrollRefs
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
