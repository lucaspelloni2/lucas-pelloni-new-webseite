import { useMemo } from "react";
import { useTextColor } from "./useTextColor";
import { useBackgroundColor } from "./useBackgroundColor";

export const useTheme = () => {
  const { color } = useTextColor();
  const { background } = useBackgroundColor();
  return useMemo(() => ({ color, background }), [background, color]);
};
