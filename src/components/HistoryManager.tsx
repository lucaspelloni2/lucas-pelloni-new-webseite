import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PAGE_HEIGHT } from "../Layout/Theme";
import { useNormalizedTransition } from "../hooks/useNormalizedTransition";

export const HistoryManager = () => {
  const { translation } = useNormalizedTransition();

  const { push } = useHistory();
  useEffect(() => {
    const index = Math.round(translation / PAGE_HEIGHT) + 1;
    push(`/#${index}`);
  }, [push, translation]);
  return null;
};
