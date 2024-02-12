import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  PostMarginContainer,
  PostPara,
  PostUserDetails,
  SinglePost,
} from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { MdPublic } from "react-icons/md";
import PostMoreOptionModal from "../modal/PostMoreOptionModal";
import Carousel from "react-material-ui-carousel";
import DisplayReactions from "../Home/post/DisplayReactions";
import ReactionsAndComments from "../Home/post/ReactionsAndComments";
import axios from "axios";
import { ToasterMessage } from "../helper/ToastHelper";
import { useNavigate } from "react-router-dom";

const SingleComponent = ({ item, date, props }) => {
  const [likePost, setLikePost] = useState(0);
  const likeCount = item.likeCount;
  const navigate = useNavigate();
//   console.log(likeCount);

  const Item = (props) => {
    return (
      <img
        src={props.img}
        alt="image"
        width={"100%"}
        height={"350px"}
        loading="lazy"
      />
    );
  };

  useEffect(() => {
    setLikePost(likeCount)
  },[likeCount]);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  const handleLikeClick = async () => {

    const response = await axios.post(
      `https://academics.newtonschool.co/api/v1/linkedin/like/${item._id}`,
      "",
      {
        headers: {
          projectID: "hv45l4abtvvc",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
        },
      }
    );
    // console.log(response);
    if (response.status === 201) {
      ToasterMessage("success", "Post liked successfully");
      setLikePost(likePost + 1);
    }
  };
//   console.log(item);
  return (
    <SinglePost key={item.author.createdAt}>
      <FlexContainer
        style={{ justifyContent: "space-between", marginRight: "25px" }}
      >
        <PostMarginContainer onClick={() => handleUserClick(item.author._id)}>
          <UserImage
            userImageStyling={{
              width: 35,
              height: 35,
              marginTop: "2px",
              backgroundColor: "green",
              color: "white !important",
              fontSize: 12,
            }}
            profileImage={item.author.profileImage}
            name={item.author.name}
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

        <PostMoreOptionModal id={item._id} props={props} />
      </FlexContainer>

      <PostPara>{item.content}</PostPara>
      <Carousel autoPlay={false} animation={"slide"} cycleNavigation={false}>
        {item?.images?.map((img) => (
          <Item img={img} />
        ))}
      </Carousel>
      <DisplayReactions
        props={{
          likes: item.likeCount,
          comments: item.commentCount,
          likePost: likePost,
          
        }}
      />
      <ReactionsAndComments
        likeProps={{
          likes: item.likeCount,
          postId: item._id,
       
          likePost: likePost,
          onHitLike : handleLikeClick
        }}
        props={props}
      />
    </SinglePost>
  );
};

export default SingleComponent;
