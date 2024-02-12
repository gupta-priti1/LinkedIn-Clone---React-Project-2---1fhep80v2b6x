import React, { useState } from "react";
import { SortByContainer } from "../../Styles/Style";
import CreatePost from "./CreatePost";
import DisplayPost from "./DisplayPost";
import { PostWrapper } from "../../Styles/Wrapper";

const Post = () => {
  const [refetchingPost, setRefetchingPost] = useState(false);
  return (
    <PostWrapper>
      <CreatePost
        props={{
          refetchingPost: refetchingPost,
          setRefetchingPost: setRefetchingPost,
        }}
      />
      <SortByContainer>
        <hr />
      </SortByContainer>
      <DisplayPost
        props={{
          refetchingPost: refetchingPost,
          setRefetchingPost: setRefetchingPost,
        }}
      />
    </PostWrapper>
  );
};

export default Post;
