import React, { useEffect, useState } from "react";
import { Wrapper } from "../Styles/Wrapper";
import { DisplayPostContainer, PostMarginContainer, PostPara, PostUserDetails, SinglePost } from "../Styles/Style";
import axios from "axios";
import UserImage from "../userImage/UserImage";

import { MdPublic } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import DisplayReactions from "./DisplayReactions";

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
  const Item = (props) => {
    return <img src={props.img} alt="image" width={"100%"} height={"350px"} />;
  };
  console.log(post);
  return (
    <Wrapper>
      <DisplayPostContainer>

        {post.map((item) => {
          let date = new Date(item.createdAt).getHours();
          return (
            <SinglePost key={item.author.createdAt}>
              <PostMarginContainer>
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
                <PostUserDetails>
                  <h4>{item.author.name}</h4>
                  <p>
                    {date}hrs •{" "}
                    <span>
                      <MdPublic />
                    </span>
                  </p>
                </PostUserDetails>
              </PostMarginContainer>

              <PostPara>{item.content}</PostPara>
              <Carousel
                autoPlay={false}
                animation={"slide"}
                cycleNavigation={false}
              >
                {item?.images?.map((img) => (
                  <Item img={img} />
                ))}
              </Carousel>
              <DisplayReactions/>
            </SinglePost>
          );
        })}
      </DisplayPostContainer>
    </Wrapper>
  );
};

export default DisplayPost;
