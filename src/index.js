import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DatePicker } from "antd";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.min.css";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import { Provider } from "react-redux";
import store, { persistor } from "./store";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </PersistGate>
  </Provider>
);
