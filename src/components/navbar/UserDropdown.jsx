import React from "react";

import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { styled } from '@mui/system';
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DropDownWrapper} from "../Styles/Wrapper";
import { DropDownItems } from "../Styles/Style";

const UserDropdown = () => {
  return (
    <DropDownWrapper>
      <div className="user-photo">
        <Avatar sx={{ width:25, height: 25, marginTop: '2px', backgroundColor:'#0A66C2',color:'white !important', fontSize:12}}>R</Avatar>
      </div>
      <Dropdown>
        <MenuButton className="menu-btn">Me<ArrowDropDownIcon/></MenuButton>
        <Menu className="menu-items">
          <DropDownItems className="menu-items">Profile</DropDownItems>
          <DropDownItems>Try Premium</DropDownItems>
          <DropDownItems>Dark Mode</DropDownItems>
          <DropDownItems>Sign out</DropDownItems>
        </Menu>
      </Dropdown>
    </DropDownWrapper>
  );
};

export default UserDropdown;
