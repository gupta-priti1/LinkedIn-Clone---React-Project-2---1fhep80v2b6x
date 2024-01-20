import React, { useEffect, useState } from "react";
import { Wrapper } from "../Styles/Wrapper";
import { DisplayPostContainer } from "../Styles/Style";
import axios from "axios";
import UserImage from "../userImage/UserImage";


import { MdPublic } from "react-icons/md";

const DisplayPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchingPost();
  }, []);
  const fetchingPost = async () => {
    const response = await axios.get(
      "https://academics.newtonschool.co/api/v1/linkedin/post",
      {
        headers: {
          projectID: "hv45l4abtvvc",
        },
      }
    );
    if (response.status === 200) {
      setPost(response.data.data);
    }
  };
  console.log(post);
  return (
    <Wrapper>
      <DisplayPostContainer>
        <UserImage
          userImageStyling={{
            width: 35,
            height: 35,
            marginTop: "2px",
            backgroundColor: "green",
            color: "white !important",
            fontSize: 12,
          }}
        />
        {post.map((item) => {
          let date = new Date(item.createdAt).getHours()
          return (
            <div key={item.author.createdAt}>
              <h4>{item.author.name}</h4>
              <p>{date}hrs • <span><MdPublic/></span></p>
              <p>{item.content}</p>
            </div>
          );
        })}
      </DisplayPostContainer>
    </Wrapper>
  );
};

export default DisplayPost;
