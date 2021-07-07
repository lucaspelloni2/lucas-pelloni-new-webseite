import {useMemo} from "react";
import {Memory} from "../Content";
import {useNormalizedTransition} from "./useNormalizedTransition";

export const useIsFocused = (memory: Memory) => {
  const {translation} = useNormalizedTransition();
  return useMemo(() => memory.translation === translation, [
    memory.translation,
    translation
  ]);
};
