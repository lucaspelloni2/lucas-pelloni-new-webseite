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
  LINKEDIN = "LINKEDIN",
  UP = "UP",
  DOWN = "DOWN",
  SHUFFLE = "SHUFFLE",
  DARK_MODE = "DARK_MODE",
  SUN = "SUN",
  DESIGN = "DESIGN",
  LOVE = "LOVE",
  ARROW_DOWN = "ARROW_DOWN",
  ARROW_RIGHT = "ARROW_RIGHT",
  GITHUB = "GITHUB",
  GOOGLE_SCHOLAR = "GOOGLE_SCHOLAR",
  CHEVRON_RIGHT = "CHEVRON_RIGHT",
  CHEVRON_LEFT = "CHEVRON_LEFT",
  CLOSE = "CLOSE"
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
          className={className}
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

    case IconTypes.UP:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="angle-up"
          className={className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"
          ></path>
        </MyIcon>
      );

    case IconTypes.DOWN:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="angle-down"
          className={className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"
          />
        </MyIcon>
      );

    case IconTypes.ARROW_RIGHT:
      return (
        <MyIcon
          {...props}
          className={className}
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="long-arrow-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
          ></path>
        </MyIcon>
      );

    case IconTypes.GITHUB:
      return (
        <MyIcon
          {...props}
          className={className}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </MyIcon>
      );

    case IconTypes.LINKEDIN:
      return (
        <MyIcon
          {...props}
          className={className}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </MyIcon>
      );

    case IconTypes.GOOGLE_SCHOLAR:
      return (
        <MyIcon
          {...props}
          className={className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983" />
        </MyIcon>
      );
    case IconTypes.CHEVRON_RIGHT:
      return (
        <MyIcon
          {...props}
          className={className}
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="chevron-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="currentColor"
            d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
          ></path>
        </MyIcon>
      );

    case IconTypes.CHEVRON_LEFT:
      return (
        <MyIcon
          {...props}
          className={className}
          focusable="false"
          data-prefix="far"
          data-icon="chevron-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="currentColor"
            d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
          ></path>
        </MyIcon>
      );

    case IconTypes.CLOSE:
      return (
        <MyIcon
          {...props}
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="times"
          className={className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
          ></path>
        </MyIcon>
      );
    default:
      return <div />;
  }
};
