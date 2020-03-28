import {CSSProperties} from "react";
import {createGlobalStyle, ThemeProviderProps} from "styled-components";
import {transparentize} from "polished";

type Props = {
  googleUrl: string;
};

export const MainTheme: CSSProperties & Props = {
  fontFamily: "Source Sans Pro, sans-serif",
  googleUrl:
    "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"

  // add more general CSS properties here
};





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
  PRIMARY: "#29235C",
  SECONDARY: "#9aceff",
  BLUEISH_GRAY: "rgb(250, 250, 255)",
  BRIGHT_BLUE: "#1B40E6",
  BRIGHT_BLUE_HOVER: "#1e67e6",
  FOURTH: "#95e1d3",
  WHITE: "#fff",
  BLACK: "#000",
  BACKGROUND: "#F6F7F9",
  SINGLE_SIGNATURE: "#00635D",
  DOUBLE_SIGNATURE: "#6665DD"
};

export enum __ALERTS {
  INFO = "#11cdef",
  SUCCESS = "#21bf73",
  WARNING = "#F45B69",
  WARNING_ORANGE = "#f57b51",
  ERROR = "rgb(223, 95, 103)"
}


// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
export const GlobalStyle = createGlobalStyle<{
  theme: ThemeProviderProps<any>;
}>`
  * {
    box-sizing: border-box;
    line-height: 1.5em;
    outline: none;
  }
  
  @import url(${MainTheme.googleUrl});
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    line-height: 1;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: ${__COLORS.PRIMARY};
    font-weight: 100;
    line-height: 1.4;
     font-family: inherit;
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



export const getAlphaColor = (alpha: number, color: string) => {
  return transparentize(1 - alpha, color);
};

