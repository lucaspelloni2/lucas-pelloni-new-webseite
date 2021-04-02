import {useMemo} from "react";
import useAppState from "../reducers/useAppState";

export const useMemoryColor = () => {
  const {currentMemory} = useAppState(s => s.memory);
  return useMemo(() => ({color: currentMemory.primaryColor}), [
    currentMemory.primaryColor
  ]);
};
