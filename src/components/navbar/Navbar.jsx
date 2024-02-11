import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";

import logo from "./../../assets/Images/linkedin-logo.svg";

import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GoBellFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

import { NavbarWrapper } from "../Styles/Wrapper";
import {
  LinkContainer,
  NavbarContainer,
  NavbarLeftItems,
  NavbarLinkText,
  NavbarRightItems,
  SmallScreenMenuDisplay,
} from "../Styles/Style";
import SideMenu from "./SideMenu";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  // console.log(location.pathname);
  if(location.pathname === "/login" || location.pathname === "/signup"){
    return;
  }
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLeftItems>
          <Link to="/">
            <Image src={logo} width={"45px"} className="navbar-logo" alt="logo" loading="lazy"/>
          </Link>
          <SearchBar />
        </NavbarLeftItems>
        <NavbarRightItems>
          <LinkContainer>
            <Link to="/" className="link">
              <FaHome className="navbar-icon" />
              <NavbarLinkText>Home</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/mynetwork" className="link">
              <HiUsers className="navbar-icon" />
              <NavbarLinkText>Network</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/jobs" className="link">
              <BsFillBriefcaseFill className="navbar-icon" />
              <NavbarLinkText>Jobs</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/messaging" className="link">
              <HiMiniChatBubbleLeftEllipsis className="navbar-icon" />
              <NavbarLinkText>Messaging</NavbarLinkText>
            </Link>
          </LinkContainer>

          <LinkContainer>
            <Link to="/notifications" className="link">
              <GoBellFill className="navbar-icon" />
              <NavbarLinkText>Notifications</NavbarLinkText>
            </Link>
          </LinkContainer>

          <UserDropdown />
        </NavbarRightItems>

        <SmallScreenMenuDisplay>
          {!showMenu ? (
            <IoMenu fontSize={"30px"} onClick={handleShowMenu} />
          ) : (
            <IoIosCloseCircle fontSize={'30px'} onClick={handleShowMenu}/>
          )}
        </SmallScreenMenuDisplay>
        {showMenu && <SideMenu />}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
