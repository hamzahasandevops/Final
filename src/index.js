import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./Components/Features/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
