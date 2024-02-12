import React, { useEffect } from "react";
import { SearchDisplayWrapper } from "../../../components/Styles/Wrapper";
import PostContainer from "../../../components/postContainer/PostContainer";
import { searchItemsContext } from "../../../components/context/SearchItemsContext";
import Temp2 from "../../../components/Home/news/advertisement/Temp2";
import { Image } from "react-bootstrap";

import NoProduct from "./../../../assets/Images/no-search-found.webp";
import { SearchContainer } from "../../../components/Styles/Style";
import { useNavigate, useParams } from "react-router-dom";
import { accessTokenApi } from "../../../components/context/AccessTokenContext";
import axios from "axios";

const SearchDisplay = () => {
  const { searchItems, setSearchItems } = searchItemsContext();
  const params = useParams();
  const searchTerm = params.searchTerm
  // console.log(searchTerm);

  const { accessToken } = accessTokenApi();

  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
      return;
    }

    fetchingSearch();
  }, []);

  const fetchingSearch = async()=>{
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"author.name":"${searchTerm}","content":"${searchTerm}","title":"${searchTerm}"}`,
        {
          headers: {
            projectID: "hv45l4abtvvc",
          },
        }
      );
      // console.log(response);
      if(response.status === 200)
      {
        setSearchItems(response.data.data)
      }
     
    } catch (e) {
      console.log(e);
    }
  }

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
        <PostContainer posts={searchItems} props={{}} />
      </SearchContainer>
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
