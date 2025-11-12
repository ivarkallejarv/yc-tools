import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root is missing");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
