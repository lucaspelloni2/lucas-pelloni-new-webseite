import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {getURLFromIndex} from "../helpers/get-index-from-url";
import {useNormalizedTransition} from "../hooks/useNormalizedTransition";
import {PAGE_HEIGHT} from "../Layout/Theme";

export const HistoryManager = () => {
  const {translation} = useNormalizedTransition();
  const {push} = useHistory();
  useEffect(() => {
    const index = Math.round(translation / PAGE_HEIGHT) + 1;
    const url = getURLFromIndex(index);
    push(`/#${url}`);
  }, [push, translation]);
  return null;
};
