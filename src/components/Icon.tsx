import React, { CSSProperties, SVGAttributes } from "react";
import styled from "styled-components";
import { DARK_MODE_TRANSITION } from "../Layout/Theme";

type IconProps = {
  style?: CSSProperties;
  className?: string;
} & SVGAttributes<any> &
  any;

const MyIcon = styled.svg`
  transition: ${DARK_MODE_TRANSITION};
`;

export enum IconTypes {
  SHUFFLE = "SHUFFLE",
  DARK_MODE = "DARK_MODE",
  SUN = "SUN",
  DESIGN = "DESIGN",
  LOVE = "LOVE",
  ARROW_DOWN = "ARROW_DOWN"
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  switch (name) {
    case IconTypes.DARK_MODE:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          className="svg-inline--fa fa-moon fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          ></path>
        </MyIcon>
      );
    case IconTypes.SUN:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="sun"
          className="svg-inline--fa fa-sun fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
          ></path>
        </MyIcon>
      );
    case IconTypes.DESIGN:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="ruler-vertical"
          className="svg-inline--fa fa-ruler-vertical fa-w-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <g className="fa-group">
            <path
              className="fa-secondary"
              fill="currentColor"
              d="M160 104v16a8 8 0 0 0 8 8h88v64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88v64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88v64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88v64a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32V32A32 32 0 0 1 32 0h192a32 32 0 0 1 32 32v64h-88a8 8 0 0 0-8 8z"
              opacity="0.4"
            ></path>
            <path
              className="fa-primary"
              fill="currentColor"
              d="M160 296v16a8 8 0 0 0 8 8h88v-32h-88a8 8 0 0 0-8 8zm0 96v16a8 8 0 0 0 8 8h88v-32h-88a8 8 0 0 0-8 8zm0-192v16a8 8 0 0 0 8 8h88v-32h-88a8 8 0 0 0-8 8zm8-104a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88V96z"
            ></path>
          </g>
        </MyIcon>
      );
    case IconTypes.LOVE:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="heart"
          className="svg-inline--fa fa-heart fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g className="fa-group">
            <path
              className="fa-secondary"
              fill="currentColor"
              d="M462.32 62.63C407.5 15.94 326 24.33 275.69 76.23L256 96.53l-19.69-20.3c-50.21-51.9-131.8-60.29-186.61-13.6-62.78 53.6-66.09 149.81-9.88 207.9l193.5 199.79a31.31 31.31 0 0 0 45.28 0l193.5-199.79c56.31-58.09 53-154.3-9.78-207.9zm-52.8 185l-143.1 143.85a15.29 15.29 0 0 1-21.7 0l-140-140.78c-28.37-28.52-33.78-75-8.37-106.23a76.44 76.44 0 0 1 113.77-5.88l45.49 45.7 42.37-42.58c28.38-28.52 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.83 114.36z"
              opacity="0.4"
            ></path>
            <path
              className="fa-primary"
              fill="currentColor"
              d="M244.72 391.48l-140-140.78c-28.37-28.52-33.78-75-8.36-106.23a76.43 76.43 0 0 1 113.76-5.88l45.49 45.7 42.37-42.58c28.38-28.51 74.65-34 105.71-8.45a77.35 77.35 0 0 1 5.87 114.36L266.41 391.48a15.28 15.28 0 0 1-21.69 0z"
            ></path>
          </g>
        </MyIcon>
      );
    case IconTypes.ARROW_DOWN:
      return (
        <MyIcon
          className={className}
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="long-arrow-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="currentColor"
            d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z"
          ></path>
        </MyIcon>
      );

    case IconTypes.SHUFFLE:
      return (
        <MyIcon
          className={className}
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="random"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"
          />
        </MyIcon>
      );
    default:
      return <div />;
  }
};
