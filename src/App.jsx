import React from "react";


import './App.css';
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Navbar />
      </div>
    </div>
  );
};

export default App;
