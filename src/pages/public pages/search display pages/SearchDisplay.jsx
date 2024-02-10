import React, { useEffect } from "react";
import { SearchDisplayWrapper } from "../../../components/Styles/Wrapper";
import PostContainer from "../../../components/postContainer/PostContainer";
import { searchItemsContext } from "../../../components/context/SearchItemsContext";
import Temp2 from "../../../components/Home/news/advertisement/Temp2";
import { Image } from "react-bootstrap";

import NoProduct from "./../../../assets/Images/no-search-found.webp";
import { SearchContainer } from "../../../components/Styles/Style";
import { useNavigate } from "react-router-dom";
import { accessTokenApi } from "../../../components/context/AccessTokenContext";

const SearchDisplay = () => {
  const { searchItems, setSearchItems } = searchItemsContext();

  const { accessToken } = accessTokenApi();
  
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
      return;
    }
  }, []);


  if (searchItems.length === 0) {
    return (
      <div>
        <Image src={NoProduct} alt="no-product" loading="lazy" fluid />
      </div>
    );
  }
  return (
    <SearchDisplayWrapper>
      <SearchContainer>
        <PostContainer posts={searchItems} />
      </SearchContainer>
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
