import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  DisplayPostContainer,
  PostMarginContainer,
  PostPara,
  PostUserDetails,
  SinglePost,
} from "../../Styles/Style";
import axios from "axios";
import UserImage from "../../userImage/UserImage";

import { MdPublic } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import DisplayReactions from "./DisplayReactions";
import Reactions from "./Reactions";
import { postContext } from "../../context/PostContext";
import { likePostContext } from "../../context/LikePostContext";
import ReactionsAndComments from "./ReactionsAndComments";
import PostContainer from "../../postContainer/PostContainer";

const DisplayPost = () => {
  const { post, setPost } = postContext();
  const { like, setLike } = likePostContext();

  useEffect(() => {
    fetchingPost();
    // console.log("fetching");
  }, [like]);

  const fetchingPost = async () => {
    const response = await axios.get(
      "https://academics.newtonschool.co/api/v1/linkedin/post",
      {
        headers: {
          projectID: "hv45l4abtvvc",
        },
      }
    );
    // console.log(response);
    if (response.status === 200) {
      setPost(response.data.data);
      // setLike(response.data.data.likeCount)
    }
  };

 

  // console.log("post", post);
  return (
    <Wrapper>
      <DisplayPostContainer>
       <PostContainer posts={post}/>
      </DisplayPostContainer>
    </Wrapper>
  );
};

export default DisplayPost;
