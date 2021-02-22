import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Store
import { createStore } from "redux";
import myReducer from "./reducers/index";
import { Provider } from "react-redux";

const store = createStore(myReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
