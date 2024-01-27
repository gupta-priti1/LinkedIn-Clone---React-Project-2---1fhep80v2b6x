import React from "react";
import {
  SortByContainer,
} from "../../Styles/Style";
import CreatePost from "./CreatePost";
import DisplayPost from "./DisplayPost";
import { PostWrapper } from "../../Styles/Wrapper";

const Post = () => {
  return (
    <PostWrapper>
      <CreatePost />
      <SortByContainer>
        <hr />
        <p>Sort by:Top</p>
      </SortByContainer>
      <DisplayPost />
    </PostWrapper>
  );
};

export default Post;
