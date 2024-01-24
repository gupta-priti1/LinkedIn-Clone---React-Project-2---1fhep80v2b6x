
import React from "react";
import { CommentInput, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";

const Comments = () => {
    const handleFetchingComments = ()=>{

    }
  return (
    <div>
      <FlexContainer>
        <UserImage />
        <CommentInput />
      </FlexContainer>


    </div>
  );
};

export default Comments;
