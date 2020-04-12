import React, { useEffect, useRef } from "react";

function useRecursiveTimeout<T>(
  callback: () => Promise<T> | (() => void),
  delay: number | null
) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout loop.
  useEffect(() => {
    let id: NodeJS.Timeout;
    function tick() {
      const ret = savedCallback.current();

      if (ret instanceof Promise) {
        ret.then(() => {
          if (delay !== null) {
            // @ts-ignore
            id = setTimeout(tick, delay);
          }
        });
      } else {
        if (delay !== null) {
          // @ts-ignore
          id = setTimeout(tick, delay);
        }
      }
    }
    if (delay !== null) {
      // @ts-ignore
      id = setTimeout(tick, delay);
      return () => id && clearTimeout(id);
    }
  }, [delay]);
}

export default useRecursiveTimeout;
