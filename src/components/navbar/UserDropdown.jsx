import React from "react";

import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DropDownWrapper } from "../Styles/Wrapper";
import { DropDownContainer, DropDownItems } from "../Styles/Style";
import UserImage from "../userImage/UserImage";

import logoutFunction from "../helper/Logout";

import { userContextApi } from "../context/UserContext";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const { userData } = userContextApi();
  const handleLogout = () => {
    logoutFunction();
    console.log("hello");
  };
  return (
    <DropDownWrapper>
      <Dropdown>
        <MenuButton className="menu-btn">
          <UserImage
            userImageStyling={{
              width: 25,
              height: 25,
              marginTop: "2px",
              backgroundColor: "#0A66C2",
              color: "white !important",
              fontSize: 12,
            }}
          />
          <DropDownContainer>
            Me
            <ArrowDropDownIcon />
          </DropDownContainer>
        </MenuButton>
        <Menu className="menu-items">
          <DropDownItems className="menu-items">
            {" "}
            <Link to={`/user/${userData._id}`} className="link profile">
              Profile
            </Link>
          </DropDownItems>
          <DropDownItems >
            <Link className="link">Try Premium</Link>
          </DropDownItems>
          <DropDownItems>
            <Link className="link">Update Password</Link>
          </DropDownItems>
          <DropDownItems className="link" onClick={handleLogout}>Sign out</DropDownItems>
        </Menu>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default UserDropdown;
