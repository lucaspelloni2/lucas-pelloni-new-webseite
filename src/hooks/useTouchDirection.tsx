import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {throttled} from "./useMouseWheel";

// to avoid scrolling by other gestures
const TOLERANCE_THRESHOLD = 100;

export const useTouchDirection = () => {
  const ref = useRef<any>(null);
  const [dir, setDir] = useState<string | null>(`null`);
  const [startingPosition, setStartingPosition] = useState<number>(-1);

  const touchStartHandler = useCallback((e: TouchEvent) => {
    // console.log("start", e.changedTouches[0]);
    setStartingPosition(e.changedTouches[0].clientY);
  }, []);
  const touchMoveHandler = throttled(
    useCallback((e: TouchEvent) => {
      //console.log("moving", e.changedTouches[0]);
    }, []),
    1500
  );
  const touchEndHandler = useCallback(
    (e: TouchEvent) => {
      const destination = e.changedTouches[0].clientY;
      const delta = Math.abs(startingPosition - destination);
      if (delta < TOLERANCE_THRESHOLD) return;
      if (destination < startingPosition) {
        setDir(`down-${Date.now()}`);
      } else {
        setDir(`up-${Date.now()}`);
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

  return useMemo(() => ({ref, dir}), [ref, dir]);
};
