import { keyframes } from "styled-components";
import {SPACING} from "./Theme";

export const INITIAL_ANIMATION_DURATION_IN_SECONDS = 2;

export const fadeIn = keyframes`
  from {
  opacity: 0;
  }
  to {
  opacity: 1;
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
