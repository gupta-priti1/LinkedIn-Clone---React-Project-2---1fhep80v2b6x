import React, { useEffect, useState } from "react";
import {
  CommentInput,
  CommentsContainer,
  FlexContainer,
} from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import DisplayingComments from "./DisplayingComments";
import { Button } from "react-bootstrap";

const Comments = ({ props }) => {
  const [showPostButton, setShowPostButton] = useState(false);
  const[commentText, setCommentText]= useState('')
  const handleCommentChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value.trim().length > 0 && e.target.value != "") {
      setShowPostButton(true);
      setCommentText(e.target.value)
    }
    else
    {
      setShowPostButton(false);
    }
  };
  console.log(commentText);

  const handlePostingComment= async()=>{

  }

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
        />
        <CommentInput type="text" onInput={handleCommentChange} />
        {showPostButton &&
         <Button onClick={handlePostingComment}>Post</Button>}
      </CommentsContainer>
      <DisplayingComments props={props} />
    </div>
  );
};

export default Comments;
