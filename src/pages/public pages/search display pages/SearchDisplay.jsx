import React from "react";
import Temp2 from "../../../components/Home/Temp2";
import { SearchDisplayWrapper} from "../../../components/Styles/Wrapper";
import PostContainer from "../../../components/postContainer/PostContainer";
import { searchItemsContext } from "../../../components/context/SearchItemsContext";

const SearchDisplay = () => {
  const{searchItems, setSearchItems} = searchItemsContext();
  return (
    <SearchDisplayWrapper>
        <PostContainer posts={searchItems}/>
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
