import useAppState from "../reducers/useAppState";
import { useMemo } from "react";
import { __COLORS } from "./Theme";

export const useTextColor = () => {
  const { isDarkMode } = useAppState(s => s.darkMode);
  return useMemo(
    () => ({ color: isDarkMode ? __COLORS.WHITE : __COLORS.PRIMARY }),
    [isDarkMode]
  );
};
