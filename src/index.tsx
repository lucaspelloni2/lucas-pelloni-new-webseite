import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./reducers/store";
import { Provider } from "react-redux";

type Props = { hideLoader?: () => void; showLoader?: () => void };

const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader?.classList.remove("loader--hide");

const hideLoader = () => loader?.classList.add("loader--hide");

const MyApp = ({ hideLoader }: Props) => {
  // @ts-ignore
  useEffect(hideLoader, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <MyApp hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("root")
    ),
  2000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
