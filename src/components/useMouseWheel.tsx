import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { useThrottleFn } from "react-use";


type Props = {
  onScrollUp: () => void;
  onScrollDown: () => void;
};

export const useMouseWheel = ({ onScrollUp, onScrollDown }: Props) => {
  const ref = useRef<any>(null);

  const handleMouseScroll = useCallback(
    (e: any) => {
      const { wheelDeltaY } = e;
      if (wheelDeltaY > 0) {
        onScrollUp();
      } else if (wheelDeltaY < 0) {
        onScrollDown();
      }
    },
    [onScrollDown, onScrollUp]
  );

  useEffect(() => {
    const r = ref.current;
    if (r) {
      r.addEventListener("mousewheel", handleMouseScroll);
    }
    return () => {
      if (r) {
        r.removeEventListener("mousewheel", handleMouseScroll);
      }
    };
  }, [handleMouseScroll, ref]);

  return useMemo(() => ({ ref }), []);
};
