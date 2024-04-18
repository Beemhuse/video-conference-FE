import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

// import socketConnection from "../utilities/socketConnection"
import { io } from "socket.io-client";
import store from "./store/index.js";

io.connect("https://localhost:9000");
// socketConnection()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
