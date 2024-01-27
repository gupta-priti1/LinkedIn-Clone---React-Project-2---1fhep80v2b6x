import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";
import Login from "./pages/auth pages/login/Login";

const App = () => {
  const [access, setacess] = useState("");
  return (
    <div className="app-wrapper">
      <div className="app-container">
        {access ? (
          <>
            <Navbar />
            <Routers />
          </>
        ) : (
          <><Login/></>
        )}
      </div>
    </div>
  );
};

export default App;
