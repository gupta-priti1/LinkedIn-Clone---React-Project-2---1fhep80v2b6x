import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PostContext from "./components/context/PostContext.jsx";
import LikePostContext from "./components/context/LikePostContext.jsx";
import SearchItemsContext from "./components/context/SearchItemsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostContext>
        <LikePostContext>
            <SearchItemsContext>
              <App />
            </SearchItemsContext>
        </LikePostContext>
      </PostContext>
    </BrowserRouter>
  </React.StrictMode>
);
