import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {useTheme} from "./hooks/useTheme";
import "./Layout/fonts.css";
import {GlobalStyle, MainTheme} from "./Layout/Theme";
import {Pages} from "./Pages/Pages";

export const App = () => {
  const {color, background} = useTheme();
  return (
    <Router>
      <Switch>
        <Route exact path="/*" component={Pages} />
      </Switch>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle color={color} background={background} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
