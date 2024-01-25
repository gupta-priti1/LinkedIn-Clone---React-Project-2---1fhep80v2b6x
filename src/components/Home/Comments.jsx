import React, { useEffect, useState } from "react";
import { CommentInput, CommentsContainer, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import DisplayingComments from "./DisplayingComments";

const Comments = ({ props }) => {
 
  return (
    <div>
      <CommentsContainer>
        <UserImage userImageStyling={{
                    width: 35,
                    height: 35,
                    marginTop: "2px",
                    backgroundColor: "#0A66C2",
                    color: "white !important",
                    fontSize: 12,
                  }}/>
        <CommentInput />
      </CommentsContainer>
      <DisplayingComments props={props}/>
      
    </div>
  );
};

export default Comments;
