import React from "react";
import { LinkContainer, SidebarContainer } from "../Styles/Style";
import { Link } from "react-router-dom";

import { IoIosCloseCircle } from "react-icons/io";
import UserDropdown from "./UserDropdown";
import UserImage from "../userImage/UserImage";
import { userContextApi } from "../context/UserContext";
import { logoutFunction } from "../helper/Logout";

const SideMenu = () => {
  const { userData } = userContextApi();
  const handleLogout = () => {
    logoutFunction();
    
  };
  return (
    <SidebarContainer>
      <LinkContainer>
        <UserImage
          userImageStyling={{
            width: "55px",
            height: "55px",
            backgroundColor: "#0A66C2",
          }}
        />

        <Link to={`/user/${userData._id}`} className="link profile">
          Profile
        </Link>
        <Link to="/mynetwork" className="link">
          Network
        </Link>
        <Link to="/mynetwork" className="link">
          Jobs
        </Link>
        <Link to="/mynetwork" className="link">
          Messaging
        </Link>
        <Link to="/mynetwork" className="link">
          Notifications
        </Link>
        <Link to="/mynetwork" className="link">
          UpdatePassword
        </Link>

        <Link className="link" onClick={handleLogout}>
          Login/logout
        </Link>
      </LinkContainer>
    </SidebarContainer>
  );
};

export default SideMenu;
