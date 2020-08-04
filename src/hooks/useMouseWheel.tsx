import { useCallback, useEffect, useMemo, useRef } from "react";

type Props = {
  onScrollUp: () => void;
  onScrollDown: () => void;
};

// ES6 code
export function throttled(delay: number, fn: any) {
  let lastCall = 0;
  // @ts-ignore
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

export const useMouseWheel = ({ onScrollUp, onScrollDown }: Props) => {
  const ref = useRef<any>(null);

  const handleMouseScroll = throttled(
    1500,
    useCallback(
      (e: any) => {
        const { wheelDeltaY } = e;
        if (wheelDeltaY > 0) {
          onScrollUp();
        } else if (wheelDeltaY < 0) {
          onScrollDown();
        }
      },
      [onScrollDown, onScrollUp]
    )
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

  return useMemo(() => ({ ref }), [ref]);
};
