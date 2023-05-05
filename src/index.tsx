import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* need to promote the Router to here to keep route-referencing functions
    in App.js in scope */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
