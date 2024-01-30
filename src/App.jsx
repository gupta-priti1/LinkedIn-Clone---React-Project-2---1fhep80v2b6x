import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";
import Signup from "./pages/auth pages/signup/Signup";
import Login from "./pages/auth pages/login/Login";
import { accessTokenApi } from "./components/context/AccessTokenContext";

const App = () => {
  const { accessToken } = accessTokenApi();
  console.log(accessToken);
  return (
    <div className="app-wrapper">
      <div className="app-container">
        {accessToken ? (
          <>
            <Navbar />
            <Routers />
          </>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default App;
