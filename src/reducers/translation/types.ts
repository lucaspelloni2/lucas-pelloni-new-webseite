export enum ActionTypes {
  SET_TRANSLATION = "SET_TRANSLATION",
  SET_NUMBER_TRANSLATION = "SET_NUMBER_TRANSLATION"
}

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  BREAK = "BREAK"
}

/**
 * Action Types
 */
export type SetTranslation = {
  type: ActionTypes.SET_TRANSLATION;
  direction: Direction | null;
};

export type SetNumberTranslation = {
  type: ActionTypes.SET_NUMBER_TRANSLATION;
  translation: number;
};

/**
 * State Type
 */
export type TranslationState = {
  translation: number;
};
