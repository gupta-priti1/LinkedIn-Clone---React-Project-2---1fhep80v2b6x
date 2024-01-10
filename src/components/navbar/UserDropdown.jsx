import React from "react";

import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const UserDropdown = () => {
  return (
    <div>
      <div className="user-photo">
        <Avatar sx={{ width:25, height: 25, marginTop: '2px', backgroundColor:'#0A66C2',color:'white !important', fontSize:12}}>OP</Avatar>
      </div>
      <Dropdown>
        <MenuButton className="menu-btn">Me <ArrowDropDownIcon/></MenuButton>
        <Menu>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Try Premium</MenuItem>
          <MenuItem>Dark Mode</MenuItem>
          <MenuItem>Sign out</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default UserDropdown;
