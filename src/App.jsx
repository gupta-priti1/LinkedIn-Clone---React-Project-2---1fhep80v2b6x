import React from "react";


import './App.css';
import Navbar from "./components/navbar/Navbar";
import Routers from "./Routes/Routers";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Navbar/>
       <Routers/>
      </div>
    </div>
  );
};

export default App;
