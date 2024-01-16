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
import {
  LinkContainer,
  NavbarContainer,
  NavbarLeftItems,
  NavbarLinkText,
  NavbarRightItems,
} from "../Styles/Style";

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
          <LinkContainer>
            <Link to="/feed" className="link">
              <FaHome className="navbar-icon" />
              <NavbarLinkText>Home</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <HiUsers className="navbar-icon" />
            <NavbarLinkText>Network</NavbarLinkText>
          </LinkContainer>

          <LinkContainer>
            <BsFillBriefcaseFill className="navbar-icon" />
            <NavbarLinkText>Jobs</NavbarLinkText>
          </LinkContainer>

          <LinkContainer>
            <HiMiniChatBubbleLeftEllipsis className="navbar-icon" />
            <NavbarLinkText>Messaging</NavbarLinkText>
          </LinkContainer>

          <LinkContainer>
            <GoBellFill className="navbar-icon" />
            <NavbarLinkText>Notifications</NavbarLinkText>
          </LinkContainer>

          <UserDropdown />
        </NavbarRightItems>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
