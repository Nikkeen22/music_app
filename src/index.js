// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";         // <<— note "react-dom/client"
import App from "./App";                         // or wherever your App component lives
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
