import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importing the main App component
import "./styles/App.css"; // Import global styles if needed

const root = ReactDOM.createRoot(document.getElementById("root")); // Connect to the #root div in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
