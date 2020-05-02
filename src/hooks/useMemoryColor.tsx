import useAppState from "../reducers/useAppState";
import { useMemo } from "react";

export const useMemoryColor = () => {
  const { currentMemory } = useAppState(s => s.memory);
  return useMemo(() => ({ color: currentMemory.primaryColor }), [
    currentMemory.primaryColor
  ]);
};
