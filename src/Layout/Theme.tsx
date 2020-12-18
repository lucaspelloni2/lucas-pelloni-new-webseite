import { CSSProperties } from "react";
import styled, {
  createGlobalStyle,
  ThemeProviderProps
} from "styled-components";
import { parseToHsl, transparentize } from "polished";

type Props = {
  googleUrl: string;
};

export const MainTheme: CSSProperties & Props = {
  fontFamily: "Avenir Next, sans-serif",
  googleUrl:
    "https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap"

  // add more general CSS properties here
};

export const SPACING = 10;
export const DARK_MODE_TRANSITION = `0.5s ease-in-out all`;
export const COLOR_TRANSITION = `0.3s ease-in-out all`;
//export const PAGE_TRANSITION = `0.7s cubic-bezier(.67,0,.29,1.01) all`;
export const PAGE_TRANSITION = `all 1000ms ease 0s`;
export const PAGE_TRANSITION_LINEAR = `0.7s ease-in-out all`;
export const LEFT_PANEL_TRANSITION_DURATION_IN_SECONDS = 0.4;
export const LEFT_PANEL_TRANSITION = `${LEFT_PANEL_TRANSITION_DURATION_IN_SECONDS}s cubic-bezier(.63,.33,.38,1.07) all`;
export const CIRCLE_TRANSITION = `1s ease-in-out all`;
export const PAGE_HEIGHT = 100;
export const PAGE_WIDTH = 100;
export const CIRCLE_RIGHT_OVERFLOW = 12;
export const CIRCLE_TOP_OVERFLOW = SPACING * 15;
export const MEMORY_RIGHT_PANEL_WIDTH = SPACING * 15;
export const MEMORY_LEFT_PANEL_WIDTH = `50vw`;
export const YEAR_HEIGHT = SPACING * 10;
export const DEFAULT_LOGO =
  "https://lucas-website.s3.eu-central-1.amazonaws.com/memories/default_logo.png";
export const NUMBER_OF_PAGES = 20;
export const PageDimensions = new Array(NUMBER_OF_PAGES)
  .fill(0)
  .map((_, i) => PAGE_HEIGHT * i);

export enum __GRAY_SCALE {
  _100 = "#f6f9fc",
  _200 = "#e9ecef",
  _300 = "#dee2e6",
  _400 = "#ced4da",
  _500 = "#adb5bd",
  _600 = "#8898aa",
  _700 = "#525f7f",
  _800 = "#32325d",
  _900 = "#212529",
  _BLACK = "#000"
}

// Colors Palette https://colorhunt.co/
export const __COLORS = {
  PRIMARY: "#030047",
  PRIMARY_HOVER: "#110c77",
  SECONDARY: "#5F5FFF",
  TERTIARY: "#FF3E6C",
  TERTIARY_HOVER: "#f14169",
  FOURTH: "#FFCC3E",
  FIFTH: "#8FACFF",
  WHITE: "#fff"
};

// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
export const GlobalStyle = createGlobalStyle<{
  color: string;
  background: string;
}>`
  * {
    box-sizing: border-box;
    line-height: 1.5em;
    outline: none;
  }
  
  @import url(${MainTheme.googleUrl});
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  @import url("https://fast.fonts.net/lt/1.css?apiType=css&c=5f1dfaf6-7d97-4c84-a1dc-d99093e9c98d&fontids=5199694,5508244");
    @font-face{
        font-family:"Avenir Next W05 Bold";
        src:url("5199694/750e110a-c47f-4c8f-829a-b56cc20cc51d.woff2") format("woff2"),url("5199694/f3420df8-1310-4059-9207-e82b1c9dd3a5.woff") format("woff");
    }
    @font-face{
        font-family:"Avenir Next W05 Regular";
        src:url("5508244/77caabd3-1877-4634-85c8-8e398a093b99.woff2") format("woff2"),url("5508244/e388ac99-8c6a-4451-8690-1d15b4d45adb.woff") format("woff");
    }
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
     scroll-behavior: smooth;
    height: 100%;
    overflow: hidden;

    width: 100%;  
    padding: 0;
    margin: 0;
    border: 0;
      transition: ${DARK_MODE_TRANSITION};
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    overflow: hidden;
    width: 100%;
    line-height: 1;
    font-weight: inherit;
    background: ${props => props.background};
    color: ${props => props.color};
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    outline: none;
  h1, h2, h3, h4, h5, h6, p  {
    color: ${props => props.color};
    font-weight: 100;
    line-height: 1.4;
    font-family: inherit;
        transition: ${DARK_MODE_TRANSITION};
  }

  
  h1 {
   font-size: 22px;
  }
  
  p {
    word-break: break-word;
    line-height: 1.4;
     font-family: inherit;
  }
  li {
    font-weight: 100;
  }
  input, textarea {
  box-shadow: none;
   font-family: inherit;
    -webkit-appearance: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
`;

export const getColors = () => [
  __COLORS.SECONDARY,
  __COLORS.TERTIARY,
  __COLORS.FIFTH
];

export const getRandomTextColors = () => {
  const colors = [__COLORS.SECONDARY, __COLORS.TERTIARY, __COLORS.FOURTH];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const getRandomColor = () => {
  const colors = getColors();
  return colors[Math.floor(Math.random() * colors.length)];
};
export const getAlphaColor = (alpha: number, color: string) => {
  return transparentize(1 - alpha, color);
};

export const getHSL = (color: string) => {
  const { hue, saturation, lightness } = parseToHsl(color);
  return `hsl(${hue}, ${saturation * 100}%, ${lightness * 100}%)`;
};

export const getHSLA = (alpha: number, color: string) => {
  const { hue, saturation, lightness } = parseToHsl(color);
  return `hsla(${hue}, ${saturation * 100}%, ${lightness * 100}%, ${alpha})`;
};

export const AnimatedOpacityContainer = styled.div<{ visible: boolean }>`
  opacity: ${props => (props.visible ? 1 : 0)};
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  z-index: ${props => (props.visible ? "auto" : -2)};
  transition: ${COLOR_TRANSITION};
`;
