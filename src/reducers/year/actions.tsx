import { ActionTypes, SetCurrentMemory } from "./types";
import { Memory } from "../../Content";

export const setCurrentMemory = (memory: Memory): SetCurrentMemory => {
  return {
    type: ActionTypes.SET_MEMORY,
    memory
  };
};
