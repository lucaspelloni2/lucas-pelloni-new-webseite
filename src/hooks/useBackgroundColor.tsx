import useAppState from "../reducers/useAppState";
import { useMemo } from "react";
import { __COLORS } from "../Layout/Theme";

export const useBackgroundColor = () => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  return useMemo(
    () => ({ background: isDarkMode ? __COLORS.PRIMARY : __COLORS.WHITE }),
    [isDarkMode]
  );
};
