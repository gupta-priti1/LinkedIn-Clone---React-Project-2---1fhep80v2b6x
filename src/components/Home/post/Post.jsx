import React from "react";
import {
  FlexContainer,
  PostContainer,
  SortByContainer,
} from "../../Styles/Style";
import CreatePost from "./CreatePost";
import DisplayPost from "./DisplayPost";

const Post = () => {
  return (
    <PostContainer>
      <CreatePost />
      <SortByContainer>
        <hr />
        <p>Sort by:Top</p>
      </SortByContainer>
      <DisplayPost />
    </PostContainer>
  );
};

export default Post;
