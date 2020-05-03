import { useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (ref: any) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  /**
   * Alert if clicked on outside of element
   */

  useEffect(() => {
    function handleClickOutside(event: any) {
      const isOutside = Boolean(
        ref.current && !ref.current.contains(event.target)
      );
      setClickedOutside(isOutside);
    }
    // Bind the event listener
    // @ts-ignore
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      // @ts-ignore
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { clickedOutside };
};
