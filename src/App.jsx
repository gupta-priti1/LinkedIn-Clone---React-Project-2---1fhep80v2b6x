import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";
import Login from "./pages/auth pages/login/Login";
import { accessTokenApi } from "./components/context/AccessTokenContext";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { accessToken } = accessTokenApi();
  console.log(accessToken);
  return (
    <div className="app-wrapper">
      <div className="app-container">
     
        <ToastContainer />
        
            <Navbar />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Routers />
            </div>
      </div>
    </div>
  );
};

export default App;
