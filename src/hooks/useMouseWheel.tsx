import {useCallback, useEffect, useMemo, useRef, useState} from "react";

// ES6 code
export function throttled(fn: any, delay: number) {
  let lastCall = 0;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

export const useMouseWheel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [dir, setDir] = useState<string | null>(`null`);

  const mouseWheelHandler = useCallback(
    throttled((e: any) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const delta = e.deltaY || -e.wheelDelta || e.detail;
      if (isNaN(delta)) return;

      if (delta > 0) {
        setDir(`down-${Date.now()}`);
      } else if (delta < 0) {
        setDir(`up-${Date.now()}`);
      }
    }, 1500),
    [throttled]
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
