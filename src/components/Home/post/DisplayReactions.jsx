import React from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  DisplayReactionsContainer,
  FlexContainer,
  LikeDisplayContainer,
} from "../../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
const DisplayReactions = ({ props }) => {
  // const likes = props.likes;
  const comments = props.comments;
  const likePost = props.likePost;
  
  return (
    <Wrapper>
      <DisplayReactionsContainer>
        <FlexContainer>
          <LikeDisplayContainer>
            <FaThumbsUp className="like-icon" />
          </LikeDisplayContainer>
          <h4>{likePost}</h4>
        </FlexContainer>
        <FlexContainer>
          <h4>{comments} comments</h4>
        </FlexContainer>
      </DisplayReactionsContainer>
    </Wrapper>
  );
};

export default DisplayReactions;
