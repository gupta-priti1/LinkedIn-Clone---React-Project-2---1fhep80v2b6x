import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/public pages/Home";
import MyNetwork from "../pages/public pages/MyNetwork";
import Jobs from "../pages/public pages/Jobs";
import Messaging from "../pages/public pages/Messaging";
import Notifications from "../pages/public pages/Notifications";
import SearchDisplay from "../pages/public pages/search display pages/SearchDisplay";
import { RoutesWrapper } from "../components/Styles/Wrapper";
import Login from "../pages/auth pages/login/Login";

const Routers = () => {
  return (
    <RoutesWrapper className="route">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/search/:searchTerm" element={<SearchDisplay />} />
      </Routes>
    </RoutesWrapper>
  );
};

export default Routers;
