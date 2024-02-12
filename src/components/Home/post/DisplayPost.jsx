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

import InfiniteScroll from "react-infinite-scroll-component";

const DisplayPost = ({ props }) => {
  const { refetchingPost, setRefetchingPost } = props;
  // console.log({refetchingPost, setRefetchingPost});

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { post, setPost } = postContext();
  const { like, setLike } = likePostContext();

  const fetchingPost = async () => {
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/linkedin/post?limit=10&page=${page}`,
      {
        headers: {
          projectID: "hv45l4abtvvc",
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        // console.log(data);

        setPost((p) => [...res.data, ...p]);
        // setPost((p) => [...p, ...res.data]);
        // setPost(res.data);

        setPage((p) => p + 1);
      })

      .catch((error) => {
        console.log(error);

        setHasMore(false);
      });
  };

  useEffect(() => {
    fetchingPost();
  }, [refetchingPost]);

  return (
    <div style={{ width: "100%" }}>
      <InfiniteScroll
        dataLength={post.length}
        style={{
          display: "flex",

          flexWrap: "wrap",

          overflow: "hidden",

          padding: "15px",
        }}
        hasMore={hasMore}
        next={fetchingPost}
      >
        <Wrapper>
          <DisplayPostContainer>
            <PostContainer
              posts={post}
              props={{ refetchingPost, setRefetchingPost }}
            />
          </DisplayPostContainer>
        </Wrapper>
      </InfiniteScroll>
    </div>
  );
};

export default DisplayPost;
