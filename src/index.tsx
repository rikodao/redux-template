import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./application/store/store";
import { Provider } from "react-redux";
import { Router } from "router";
import { worker } from "infrastructure/mock/browser";
import * as serviceWorker from "./serviceWorker";

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
