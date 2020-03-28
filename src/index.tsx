import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle, MainTheme } from "./Layout/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
    </ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
