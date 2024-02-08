import React from "react";
import { SearchDisplayWrapper } from "../../../components/Styles/Wrapper";
import PostContainer from "../../../components/postContainer/PostContainer";
import { searchItemsContext } from "../../../components/context/SearchItemsContext";
import Temp2 from "../../../components/Home/advertisement/Temp2";
import { Image } from "react-bootstrap";

import NoProduct from "./../../../assets/Images/no-search-found.webp"

const SearchDisplay = () => {
  const { searchItems, setSearchItems } = searchItemsContext();
  if(searchItems.length === 0)
  {
    return(
      <div>
        <Image src={NoProduct}/>
      </div>
    )
  }
  return (
    <SearchDisplayWrapper>
      <PostContainer posts={searchItems} />
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
