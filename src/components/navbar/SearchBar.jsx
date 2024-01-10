import React from "react";
import { TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div>
        <SearchIcon />
        <TextField id="filled-basic" label="Search" variant="filled" />
      </div>
      <div>
        <div>
          <HomeRoundedIcon />
          <h4>Home</h4>
        </div>
        <div>
          <GroupIcon />
          <h4>Network</h4>
        </div>
        <div>
          <WorkIcon />
          <h4>Jobs</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
