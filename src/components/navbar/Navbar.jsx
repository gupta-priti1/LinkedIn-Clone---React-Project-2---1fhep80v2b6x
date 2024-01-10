import React from "react";

import logo from "./../../assets/Images/linkedin-logo.svg";

import SearchBar from "./SearchBar";

import { Image } from "react-bootstrap";

import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GoBellFill } from "react-icons/go";

import "./Navbar.css";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-left-items">
          <Image src={logo} width={"50px"} className="navbar-logo"/>
          <SearchBar />
        </div>
        <div className="navbar-right-items">
          <div>
            <FaHome className="navbar-icon"/>
            <h4 >Home</h4>
          </div>
          <div>
            <HiUsers className="navbar-icon"/>
            <h4>Network</h4>
          </div>
          <div>
            <BsFillBriefcaseFill className="navbar-icon"/>
            <h4>Jobs</h4>
          </div>
          <div>
            <HiMiniChatBubbleLeftEllipsis className="navbar-icon"/>
            <h4>Messaging</h4>
          </div>
          <div>
            <GoBellFill className="navbar-icon"/>
            <h4>Notifications</h4>
          </div>
          <UserDropdown/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
