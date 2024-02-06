import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CommentAuthorDetails,
  CommentsContainer,
  FlexContainer,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import { CommentsWrapper, Wrapper } from "../../Styles/Wrapper";
import SingleComment from "./SingleComment";

const DisplayingComments = ({ props, reFetchComments}) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    handleFetchingComments();
  }, [reFetchComments]);

  const postId = props.postId;

  const handleFetchingComments = async () => {
    // console.log("comment");
    const response = await axios.get(
      `https://academics.newtonschool.co/api/v1/linkedin/post/${postId}/comments`,
      {
        headers: {
          projectID: "hv45l4abtvvc",
        },
      }
    );
    // console.log(response);
    if (response.status === 200) {
      setComments(response.data.data);
    }
  };
  // console.log("comments", comments);
  return (
    <CommentsWrapper>
      {comments?.map((comment,index) => {
        return (
          <CommentsContainer key={index}>
            <SingleComment comment={comment}/>
          </CommentsContainer>
        );
      })}
    </CommentsWrapper>
  );
};

export default DisplayingComments;
