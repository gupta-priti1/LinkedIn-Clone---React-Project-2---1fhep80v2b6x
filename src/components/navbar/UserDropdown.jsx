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
import { Link, useNavigate } from "react-router-dom";
import { accessTokenApi } from "../context/AccessTokenContext";

const UserDropdown = () => {
  const navigate = useNavigate();
  const { userData } = userContextApi();
  const { accessToken, setAccessToken } = accessTokenApi();

  const handleLogout = () => {
    logoutFunction();
    setAccessToken("");
    navigate("/login");
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
            name={userData.name}
          />
          <DropDownContainer>
            Me
            <ArrowDropDownIcon />
          </DropDownContainer>
        </MenuButton>
        <Menu className="menu-items">
          <DropDownItems>
            <UserImage
              userImageStyling={{
                width: "60px",
                height: "60px",
                backgroundColor: "#0A66C2",
                fontSize: "30px",
              }}
              name={userData.name}
            />
            <div>{userData.name}</div>
          </DropDownItems>
          <DropDownItems className="menu-items">
            <Link to={`/user/${userData._id}`} className="link profile">
              Profile
            </Link>
          </DropDownItems>
          <DropDownItems>
            <Link to="https://premium.linkedin.com/" className="link">
              Try Premium
            </Link>
          </DropDownItems>
          <DropDownItems>
            <Link className="link">Update Password</Link>
          </DropDownItems>
          <DropDownItems onClick={handleLogout}>
            <div className="link">Sign out</div>
          </DropDownItems>
        </Menu>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default UserDropdown;
