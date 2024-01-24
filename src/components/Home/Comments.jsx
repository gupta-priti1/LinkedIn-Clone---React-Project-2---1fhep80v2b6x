import React, { useEffect, useState } from "react";
import { CommentInput, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import axios from "axios";

const Comments = ({ props }) => {
  const [comments, setComments] = useState();
  useEffect(() => {
    handleFetchingComments();
  }, []);

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
    console.log(response);
    if (response.status === 200) {
      setComments(response.data.data);
    }
  };
  console.log("comments", comments);
  return (
    <div>
      <FlexContainer>
        <UserImage />
        <CommentInput />
      </FlexContainer>

      {comments?.map((comment) => {
        return(

            <div>{comment.content}</div>
        )
      })}
    </div>
  );
};

export default Comments;
