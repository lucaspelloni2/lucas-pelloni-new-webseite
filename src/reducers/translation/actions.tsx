import {ActionTypes, SetNumberTranslation, SetTranslation} from "./types";

export const setTranslation = (direction: string | null): SetTranslation => {
  return {
    type: ActionTypes.SET_TRANSLATION,
    direction
  };
};

export const setNumberTranslation = (
  translation: number
): SetNumberTranslation => {
  return {
    type: ActionTypes.SET_NUMBER_TRANSLATION,
    translation
  };
};
