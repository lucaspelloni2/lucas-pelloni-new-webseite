export enum ActionTypes {
  SHUFFLE = "SHUFFLE"
}

/**
 * Action Types
 */
export type Shuffle = {
  type: ActionTypes.SHUFFLE;
};

/**
 * State Type
 */
export type ShuffleState = {
  timer: number;
};
