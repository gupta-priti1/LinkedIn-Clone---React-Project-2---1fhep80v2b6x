import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";


import logo from "./../../assets/Images/linkedin-logo.svg";


import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GoBellFill } from "react-icons/go";


import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

import { Wrapper } from "../Styles/Wrapper";
import { NavbarContainer, NavbarLeftItems, NavbarRightItems } from "../Styles/Style";



const Navbar = () => {
  return (
    // <div className="navbar-wrapper">

    <Wrapper>
      <NavbarContainer>
        <NavbarLeftItems>
          <Link to="/feed">
            <Image src={logo} width={"45px"} className="navbar-logo" />
          </Link>
          <SearchBar />
          </NavbarLeftItems>
        <NavbarRightItems>
          <div>
            <Link to="/feed" className="link">
              <FaHome className="navbar-icon" />
              <h4>Home</h4>
            </Link>
          </div>
          <div>
            <HiUsers className="navbar-icon" />
            <h4>Network</h4>
          </div>
          <div>
            <BsFillBriefcaseFill className="navbar-icon" />
            <h4>Jobs</h4>
          </div>
          <div>
            <HiMiniChatBubbleLeftEllipsis className="navbar-icon" />
            <h4>Messaging</h4>
          </div>
          <div>
            <GoBellFill className="navbar-icon" />
            <h4>Notifications</h4>
          </div>
          <UserDropdown />
        </NavbarRightItems>
      
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
