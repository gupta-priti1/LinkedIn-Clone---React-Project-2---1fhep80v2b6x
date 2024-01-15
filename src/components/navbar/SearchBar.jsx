import React from "react";
import { Input } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { SearchInput, SearchbarContainer } from "../Styles/Style";

const SearchBar = () => {
  return (
    <SearchbarContainer>
      <SearchIcon />
      <SearchInput>
        <Input placeholder="Search" fullWidth />
      </SearchInput>
    </SearchbarContainer>
  );
};

export default SearchBar;
