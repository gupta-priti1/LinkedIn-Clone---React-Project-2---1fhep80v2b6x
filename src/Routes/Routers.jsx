import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/public pages/Home";
import SearchDisplay from "../pages/public pages/search display pages/SearchDisplay";
import { RoutesWrapper } from "../components/Styles/Wrapper";
import Login from "../pages/auth pages/login/Login";
import Signup from "../pages/auth pages/signup/Signup";
import UserProfile from "../components/userProfile/UserProfile";
import Error from "../components/error/Error";
import UnderConstruction from "../pages/underConstruction pages/UnderConstruction";

const Routers = () => {
  return (
    <RoutesWrapper >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/mynetwork" element={<UnderConstruction />} />
        <Route path="/jobs" element={<UnderConstruction />} />
        <Route path="/messaging" element={<UnderConstruction />} />
        <Route path="/notifications" element={<UnderConstruction />} />
        <Route path="/search/:searchTerm" element={<SearchDisplay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:id" element={<UserProfile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </RoutesWrapper>
  );
};

export default Routers;
