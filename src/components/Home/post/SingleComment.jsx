import React, { useEffect, useState } from "react";
import UserImage from "../../userImage/UserImage";
import { CommentAuthorDetails } from "../../Styles/Style";
import { fetchAuthorDetails } from "../../helper/GetAuthorDetails";

const SingleComment = ({ comment }) => {
  const [user, setUser] = useState({});
  console.log(comment);
  useEffect(() => {
    fetchingUser();
  }, []);

  const fetchingUser = async () => {
    const fetchedData = await fetchAuthorDetails(comment.author);
    if (fetchedData) {
      setUser(fetchedData.userDetails);
    }
  };
  console.log('user',user);
  return (
    <>
      <UserImage userImageStyling={{ backgroundColor: "black" }} />
      <CommentAuthorDetails>
        <h4>{user.name}</h4>
        <p>{comment.content}</p>
      </CommentAuthorDetails>
    </>
  );
};

export default SingleComment;
