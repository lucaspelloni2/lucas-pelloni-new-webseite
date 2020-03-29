import { RefObject } from "react";

export const scrollToRef = (ref: RefObject<any>) =>
  window.scrollTo(0, ref.current.offsetTop);
