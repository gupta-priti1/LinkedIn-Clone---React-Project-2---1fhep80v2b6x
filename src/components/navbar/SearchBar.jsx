import React, { useEffect, useState } from "react";

import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { SearchInput, SearchbarContainer } from "../Styles/Style";

import axios from "axios";
import { searchItemsContext } from "../context/SearchItemsContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const{searchItems, setSearchItems} = searchItemsContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchingSearchResult();
    }, 800);
    return ()=>clearTimeout(timer);
  }, [searchTerm]);

  const fetchingSearchResult = async () => {
    if(searchTerm.trim() === '')
    {
      return
    }

    navigate(`/search/${searchTerm}`)
    // try {
    //   const response = await axios.get(
    //     `https://academics.newtonschool.co/api/v1/linkedin/post?search={"author.name":"${searchTerm}","content":"${searchTerm}","title":"${searchTerm}"}`,
    //     {
    //       headers: {
    //         projectID: "hv45l4abtvvc",
    //       },
    //     }
    //   );
    //   // console.log(response);
    //   if(response.status === 200)
    //   {
    //     setSearchItems(response.data.data)
    //   }
    //   navigate(`/search/${searchTerm}`)
    // } catch (e) {
    //   console.log(e);
    // }
  };
console.log('searchItems', searchItems);

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
