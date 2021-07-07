import {useMemo} from "react";
import {useBackgroundColor} from "./useBackgroundColor";
import {useTextColor} from "./useTextColor";

export const useTheme = () => {
  const {color} = useTextColor();
  const {background} = useBackgroundColor();
  return useMemo(() => ({color, background}), [background, color]);
};
