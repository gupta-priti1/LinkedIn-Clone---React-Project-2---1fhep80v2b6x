import React, { useEffect, useState } from "react";
import {
  CommentInput,
  CommentsContainer,
  FlexContainer,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import DisplayingComments from "./DisplayingComments";
import { Button } from "react-bootstrap";
import axios from "axios";
import { userContextApi } from "../../context/UserContext";
import { ToasterMessage } from "../../helper/ToastHelper";

const Comments = ({ likeProps }) => {
  const [showPostButton, setShowPostButton] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [reFetchComments, setRefetchComments] = useState(false);

  const { userData } = userContextApi();

  const postId = likeProps.postId;

  const handleCommentChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value.trim().length > 0 && e.target.value != "") {
      setShowPostButton(true);
      setCommentText(e.target.value);
    } else {
      setShowPostButton(false);
    }
  };
  // console.log(commentText);

  const handlePostingComment = async () => {
    try {
      const response = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/comment/${postId}`,
        {
          content: commentText,
        },
        {
          headers: {
            projectID: "hv45l4abtvvc",
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        ToasterMessage("success", response.data.message);
        setCommentText("");
        setRefetchComments(!reFetchComments);
      }
    } catch (error) {
      console.log(error);
      ToasterMessage("error", "Something went wrong");
    }
  };

  return (
    <div>
      <CommentsContainer>
        <UserImage
          userImageStyling={{
            width: 35,
            height: 35,
            marginTop: "2px",
            backgroundColor: "#0A66C2",
            color: "white !important",
            fontSize: 12,
          }}
          name={userData.name}
          profileImage={userData.profileImage}
        />
        <CommentInput
          type="text"
          onInput={handleCommentChange}
          value={commentText}
        />
        {showPostButton && <Button onClick={handlePostingComment}>Post</Button>}
      </CommentsContainer>
      <DisplayingComments likeProps={likeProps} reFetchComments={reFetchComments} />
    </div>
  );
};

export default Comments;
