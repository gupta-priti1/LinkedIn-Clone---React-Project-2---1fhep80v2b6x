import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  FlexContainer,
  ReactionsContainer,
  SingleReaction,
} from "../../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios";
import { likePostContext } from "../../context/LikePostContext";
import { postContext } from "../../context/PostContext";
import { ToasterMessage } from "../../helper/ToastHelper";

const Reactions = ({ props, show }) => {
  const [likedPost, setLikedPost] = useState(false);

  const { like, setLike } = likePostContext();

  const showComments = show.show;
  const setShowComments = show.setShow;
  const postId = props.postId;

  // console.log(setShowComments);
  // useEffect(()=>{
  //   likefetching();
  // },[])
  // const likefetching =()=>{
  //   setLike(post.likeCount)
  //   console.log('like', like);
  // }
  const handleLikeClick = async () => {
    setLikedPost(!likedPost);

    const response = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${postId}`,
      "",
      {
        headers: {
          projectID: "hv45l4abtvvc",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
        },
      }
    );
    console.log(response);
    if (response.status === 201) {
      setLike(like + 1);
      ToasterMessage("success", "Post liked successfully");
    }
  };

  const handleCommentClick = () => {
    console.log(showComments);
    setShowComments(!showComments);
  };
  return (
    <Wrapper>
      <ReactionsContainer>
        <SingleReaction onClick={handleLikeClick}>
          {/* <FaThumbsUp className="icon"/> */}
          {likedPost ? (
            <FaThumbsUp className="icon" color="#378FE9" />
          ) : (
            <FaRegThumbsUp className="icon" />
          )}

          <h4>Like</h4>
        </SingleReaction>
        <SingleReaction onClick={handleCommentClick}>
          <BsChatText />
          <h4>Comment</h4>
        </SingleReaction>
        <SingleReaction style={{ cursor: "not-allowed" }}>
          <BiRepost className="repost-icon" />
          <h4>Repost</h4>
        </SingleReaction>
        <SingleReaction style={{ cursor: "not-allowed" }}>
          <RiSendPlaneFill />
          <h4>Send</h4>
        </SingleReaction>
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Reactions;
