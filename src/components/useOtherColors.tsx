import { useMemo } from "react";
import useAppState from "../reducers/useAppState";
import { __COLORS, getColors } from "../Layout/Theme";

export const useOtherColors = () => {
  const { selectedColor } = useAppState(s => s.selectedColor);
  const colors = [...getColors(), __COLORS.PRIMARY];
  return useMemo(() => colors.filter(c => c !== selectedColor), [
    colors,
    selectedColor
  ]);
};
