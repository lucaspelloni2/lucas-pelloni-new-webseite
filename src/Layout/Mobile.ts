import { css } from "styled-components";

export const EXTRA_SMALL_DEVICES_MAX_WIDTH = 600;
export const SMALL_DEVICES_MAX_WIDTH = 700;
export const MEDIUM_DEVICES_MAX_WIDTH = 768;
export const LARGE_DEVICES_MAX_WIDTH = 992;
export const EXTRA_LARGE_DEVICES_MAX_WIDTH = 1200;


// https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile
export const EXTRA_SMALL_DEVICES = (...args: any) => css`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: ${EXTRA_SMALL_DEVICES_MAX_WIDTH}px) {
    ${css`
      ${args};
    `};
  }
`;

export const SMALL_DEVICES = (...args: any) => css`
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: ${SMALL_DEVICES_MAX_WIDTH}px) {
    ${css`
      ${args};
    `};
  }
`;

export const MEDIUM_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: ${MEDIUM_DEVICES_MAX_WIDTH}px) {
    ${css`
      ${args};
    `};
  }
`;

export const LARGE_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: ${LARGE_DEVICES_MAX_WIDTH}px) {
    ${css`
      ${args};
    `};
  }
`;

export const EXTRA_LARGE_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: ${EXTRA_LARGE_DEVICES_MAX_WIDTH}px) {
    ${css`
      ${args};
    `};
  }
`;
