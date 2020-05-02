import { Memory } from "../../Content";

export enum ActionTypes {
  SET_MEMORY = "SET_MEMORY"
}

export type SetCurrentMemory = {
  type: ActionTypes.SET_MEMORY;
  memory: Memory;
};
/**
 * State Type
 */
export type YearState = {
  currentMemory: Memory;
  grouped: Memory[][];
};
