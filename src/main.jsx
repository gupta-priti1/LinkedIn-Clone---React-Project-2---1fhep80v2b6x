import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PostContext from "./components/context/PostContext.jsx";
import LikePostContext from "./components/context/LikePostContext.jsx";
import ShowCommentsContext from "./components/context/ShowCommentsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostContext>
        <LikePostContext>
          <ShowCommentsContext>
            <App />
          </ShowCommentsContext>
        </LikePostContext>
      </PostContext>
    </BrowserRouter>
  </React.StrictMode>
);
