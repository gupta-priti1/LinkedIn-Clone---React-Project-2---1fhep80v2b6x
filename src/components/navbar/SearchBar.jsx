import React, { useEffect, useState } from "react";

import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchInput, SearchbarContainer } from "../Styles/Style";

import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchingSearchResult();
    }, 800);
    return ()=>clearTimeout(timer);
  }, [searchTerm]);

  const fetchingSearchResult = async () => {
    if(searchTerm === '')
    {
      return
    }
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"author.name":"${searchTerm}","content":"${searchTerm}","title":"${searchTerm}"}`,
        {
          headers: {
            projectID: "hv45l4abtvvc",
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchbarContainer>
      <SearchIcon />
      <SearchInput>
        <Input
          placeholder="Search"
          fullWidth
          onChange={(e) => handleSearchInput(e)}
        />
      </SearchInput>
    </SearchbarContainer>
  );
};

export default SearchBar;
