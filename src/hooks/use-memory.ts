import {useMemo} from "react";
import useAppState from "../reducers/useAppState";

export const useMemory = () => {
  const {currentMemory} = useAppState(st => st.memory);
  return useMemo(() => ({memory: currentMemory}), [currentMemory]);
};
