// Hook
import {useEffect, useState} from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function getSize() {
      return {
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0
      };
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
