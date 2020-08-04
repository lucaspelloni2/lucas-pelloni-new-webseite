import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { throttled } from "./useMouseWheel";

type Props = {
  onScrollUp: () => void;
  onScrollDown: () => void;
};

export const useTouchDirection = ({ onScrollUp, onScrollDown }: Props) => {
  const ref = useRef<any>(null);

  const [startingPosition, setStartingPosition] = useState<number>(-1);

  const touchStartHandler = useCallback((e: TouchEvent) => {
    // console.log("start", e.changedTouches[0]);
    setStartingPosition(e.changedTouches[0].clientY);
  }, []);
  const touchMoveHandler = throttled(
    1500,
    useCallback((e: TouchEvent) => {
      // console.log("moving", e.changedTouches[0]);
    }, [])
  );
  const touchEndHandler = useCallback(
    (e: TouchEvent) => {
      const destination = e.changedTouches[0].clientY;
      if (destination < startingPosition) {
        onScrollDown();
      } else {
        onScrollUp();
      }
    },
    [startingPosition]
  );

  useEffect(() => {
    const r = ref.current;
    if (!r) return;

    if ("ontouchstart" in window) {
      r.addEventListener("touchstart", touchStartHandler);
      r.addEventListener("touchmove", touchMoveHandler);
      r.addEventListener("touchend", touchEndHandler);
    }

    return () => {
      r.removeEventListener("touchstart", touchStartHandler);
      r.removeEventListener("touchmove", touchMoveHandler);
      r.removeEventListener("touchend", touchEndHandler);
    };
  }, [touchEndHandler, touchMoveHandler, touchStartHandler]);

  return useMemo(() => ({ ref }), [ref]);
};
