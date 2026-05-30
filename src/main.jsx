import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "16px 20px",
          borderRadius: "18px",
        },
      }}
    />

    <App />
  </React.StrictMode>
);