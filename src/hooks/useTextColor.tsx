import {useMemo} from "react";
import {__COLORS} from "../Layout/Theme";
import useAppState from "../reducers/useAppState";

export const useTextColor = () => {
  const {isDarkMode} = useAppState(s => s.darkMode);
  return useMemo(
    () => ({color: isDarkMode ? __COLORS.WHITE : __COLORS.PRIMARY}),
    [isDarkMode]
  );
};
