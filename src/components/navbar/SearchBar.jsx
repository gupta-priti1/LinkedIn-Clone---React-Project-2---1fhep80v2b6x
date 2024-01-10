import React from "react";
import { Input, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="searchbar-container ">
        <SearchIcon />
        <Input
         className="search-input"
         placeholder="Search"
        />
    </div>
  );
};

export default SearchBar;
