import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AniProvider from "./context/AnimeContext";
import PageProvider from "./context/PageContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <PageProvider>
      <AniProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AniProvider>
    </PageProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
