import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase/firebaseConfig.js";
import { BrowserRouter } from "react-router-dom";
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
