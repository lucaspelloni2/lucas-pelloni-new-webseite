import { useMemo } from "react";
import useAppState from "../reducers/useAppState";

export const useNormalizedTransition = () => {
  const { translation } = useAppState(s => s.translation);
  return useMemo(
    () => ({
      translation: Math.abs(translation)
    }),
    [translation]
  );
};
