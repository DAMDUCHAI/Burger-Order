import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; 

//Setup redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducers } from './redux/reducers/rootReducers';

const store = createStore(rootReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);