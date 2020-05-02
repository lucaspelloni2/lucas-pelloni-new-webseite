import { useNormalizedTransition } from "./useNormalizedTransition";
import { useMemo } from "react";
import { PageDimensions } from "../Layout/Theme";

export const useImageSection = () => {
  const { translation } = useNormalizedTransition();
  return useMemo(() => ({ isImageSection: translation >= PageDimensions[3] }), [
    translation
  ]);
};
