import { keyframes } from "styled-components";
import { SPACING } from "./Theme";

export const INITIAL_ANIMATION_DURATION_IN_SECONDS = 2;

export const fadeIn = keyframes`
  from {
  opacity: 0;
  }
  to {
  opacity: 1;
  }
`;

export const fadeInBezier = keyframes`
  0% {
  opacity: 0;
  }
  75% {
    opacity: 0.8;
  }
  100% {
  opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
  opacity: 1;
  }
  to {
  opacity: 0;
  }
`;

export const slideLeft = keyframes`
  from {
  opacity: 0;   
  transform: translateX(0);
  }
  to {
  opacity: 1;
    transform: translateX(-${SPACING * 8}px);
  }
`;

export const textFocusIn = keyframes`
   0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;
