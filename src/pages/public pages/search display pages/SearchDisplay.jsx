import React from "react";
import { SearchDisplayWrapper } from "../../../components/Styles/Wrapper";
import PostContainer from "../../../components/postContainer/PostContainer";
import { searchItemsContext } from "../../../components/context/SearchItemsContext";
import News from "../../../components/Home/News";
import Temp2 from "../../../components/Home/advertisement/Temp2";

const SearchDisplay = () => {
  const { searchItems, setSearchItems } = searchItemsContext();
  return (
    <SearchDisplayWrapper>
      <PostContainer posts={searchItems} />
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
