import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import throttle from "lodash/throttle";

export const useMouseWheel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [dir, setDir] = useState<string | null>(null);

  const mouseWheelHandler = useCallback(
    throttle((e: any) => {
      const delta = e.deltaY || -e.wheelDelta || e.detail;
      if (isNaN(delta)) return;

      if (delta > 1) {
        setDir(`up-${Date.now()}`);
      } else if (delta < -1) {
        setDir(`down-${Date.now()}`);
      }
    }, 1000),
    [throttle]
  );

  useEffect(() => {
    if (!ref.current) return;
    const {current} = ref;
    // IE9, Chrome, Safari, Opera
    current.addEventListener("mousewheel", mouseWheelHandler as any, false);
    // Firefox
    current.addEventListener("DOMMouseScroll", mouseWheelHandler as any, false);
    // IE 6~8
    current.addEventListener("onmousewheel", mouseWheelHandler as any, false);

    return () => {
      current.removeEventListener(
        "mousewheel",
        mouseWheelHandler as any,
        false
      );
      current.removeEventListener(
        "DOMMouseScroll",
        mouseWheelHandler as any,
        false
      );
      current.removeEventListener(
        "onmousewheel",
        mouseWheelHandler as any,
        false
      );
    };
  }, [mouseWheelHandler]);

  return useMemo(() => ({ref, dir}), [ref, dir]);
};
