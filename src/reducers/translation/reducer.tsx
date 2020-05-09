import {
  ActionTypes,
  Direction,
  SetNumberTranslation,
  SetTranslation,
  TranslationState
} from "./types";
import { PAGE_HEIGHT } from "../../Layout/Theme";
import { getIndexFromURL } from "../../helpers/get-index-from-url";

const getInitialState = () => {
  const hash = window.location.hash.toString().replace("#", "");
  const number = getIndexFromURL(hash);
  if (!number) {
    return 0;
  }
  return -1 * (number - 1) * PAGE_HEIGHT;
};

const initialState: TranslationState = {
  translation: getInitialState()
};

const getTranslation = (
  translation: number,
  direction: Direction | null
): number => {
  if (direction === Direction.DOWN) {
    return translation - PAGE_HEIGHT;
  } else if (direction === Direction.UP) {
    return translation === 0 ? 0 : translation + PAGE_HEIGHT;
  }
  return translation;
};

const translationReducer = (
  state: TranslationState = initialState,
  action: SetTranslation | SetNumberTranslation
): TranslationState => {
  switch (action.type) {
    case ActionTypes.SET_TRANSLATION:
      return {
        ...state,
        translation: getTranslation(state.translation, action.direction)
      };
    case ActionTypes.SET_NUMBER_TRANSLATION:
      return {
        ...state,
        translation: action.translation
      };
    default:
      return state;
  }
};

export default translationReducer;
