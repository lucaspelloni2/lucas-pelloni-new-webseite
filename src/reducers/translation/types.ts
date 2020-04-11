export enum ActionTypes {
  SET_TRANSLATION = "SET_TRANSLATION"
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

/**
 * State Type
 */
export type TranslationState = {
  translation: number;
};
