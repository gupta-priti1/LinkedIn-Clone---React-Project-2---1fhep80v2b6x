import React, { useEffect, useState } from "react";
import { CommentInput, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import axios from "axios";
import { pink } from "@mui/material/colors";

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
        <UserImage userImageStyling={{
                    width: 35,
                    height: 35,
                    marginTop: "2px",
                    backgroundColor: "#0A66C2",
                    color: "white !important",
                    fontSize: 12,
                  }}/>
        <CommentInput />
      </FlexContainer>

      {comments?.map((comment) => {
        return(
          <FlexContainer>
          <UserImage userImageStyling={{backgroundColor:'black'}}/>
            <div>
              <h4>
                name
              </h4>
              {comment.content}
              </div>
          </FlexContainer>
        )
      })}
    </div>
  );
};

export default Comments;
