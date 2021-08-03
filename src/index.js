import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BeerProvider } from "./BeerContext";

ReactDOM.render(
  <BeerProvider>
    <App />
  </BeerProvider>,
  document.getElementById("root")
);
