import React from "react";
import { GlobalStyle, MainTheme } from "./Layout/Theme";
import { ThemeProvider } from "styled-components";
import { Pages } from "./Pages/Pages";
import { useTheme } from "./hooks/useTheme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const { color, background } = useTheme();
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
}

export default App;
