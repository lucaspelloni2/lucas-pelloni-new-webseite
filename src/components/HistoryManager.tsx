import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PAGE_HEIGHT } from "../Layout/Theme";
import { useNormalizedTransition } from "../hooks/useNormalizedTransition";
import { getURLFromIndex } from "../helpers/get-index-from-url";

export const HistoryManager = () => {
  const { translation } = useNormalizedTransition();
  const { push } = useHistory();
  useEffect(() => {
    const index = Math.round(translation / PAGE_HEIGHT) + 1;
    const url = getURLFromIndex(index);
    push(`/#${url}`);
  }, [push, translation]);
  return null;
};
