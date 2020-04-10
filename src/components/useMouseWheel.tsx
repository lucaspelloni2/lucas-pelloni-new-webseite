import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export enum Direction {
  UP = "UP",
  DOWN = "DOWN"
}

export const useMouseWheel = () => {
  const ref = useRef<any>(null);
  const [direction, setDirection] = useState<Direction | null>(null);

  const handleMouseScroll = useCallback((e: any) => {
    const { wheelDeltaY } = e;
    if (wheelDeltaY > 0) {
      setDirection(Direction.UP);
    } else if (wheelDeltaY < 0) {
      setDirection(Direction.DOWN);
    }
  }, []);

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

  return { ref, direction };
};
