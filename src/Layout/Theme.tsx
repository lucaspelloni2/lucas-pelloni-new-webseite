import { CSSProperties } from "react";
import { createGlobalStyle, ThemeProviderProps } from "styled-components";
import { transparentize } from "polished";

type Props = {
  googleUrl: string;
};

export const MainTheme: CSSProperties & Props = {
  fontFamily: "Nunito Sans, sans-serif",
  googleUrl:
    "https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap"

  // add more general CSS properties here
};

export const SPACING = 10;

export const DARK_MODE_TRANSITION = `0.5s ease-in-out all`;
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
  SECONDARY: "#5F5FFF",
  TERTIARY: "#FF3E6C",
  FOURTH: "#FFCC3E",
  FIFTH: "#8FACFF",
  WHITE: "#fff"
};

// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
export const GlobalStyle = createGlobalStyle<{
  theme: ThemeProviderProps<any>;
  isDarkMode: boolean;
}>`
  * {
    box-sizing: border-box;
    line-height: 1.5em;
    outline: none;
  }
  
  @import url(${MainTheme.googleUrl});
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
     scroll-behavior: smooth;
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    
     overflow-x: hidden;
    line-height: 1;
    font-weight: inherit;
     transition: ${DARK_MODE_TRANSITION};
     background: ${props =>
       props.isDarkMode ? __COLORS.PRIMARY : __COLORS.WHITE};
     color: ${props => (props.isDarkMode ? __COLORS.WHITE : __COLORS.PRIMARY)};
    font-style: inherit;
    font-size: 100%; 
    font-family: inherit;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: ${props => (props.isDarkMode ? __COLORS.WHITE : __COLORS.PRIMARY)};
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
  __COLORS.FOURTH,
  __COLORS.FIFTH
];

export const getRandomColor = () => {
  const colors = getColors();
  return colors[Math.floor(Math.random() * colors.length)];
};
export const getAlphaColor = (alpha: number, color: string) => {
  return transparentize(1 - alpha, color);
};
