import React from "react";
import {
  DisplayPostContainer,
  FlexContainer,
  PostMarginContainer,
  PostPara,
  PostUserDetails,
  SinglePost,
} from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { MdPublic } from "react-icons/md";
import Carousel from "react-material-ui-carousel";
import DisplayReactions from "../Home/post/DisplayReactions";
import ReactionsAndComments from "../Home/post/ReactionsAndComments";
import { PostWrapper } from "../Styles/Wrapper";
import { useNavigate } from "react-router-dom";

import PostMoreOptionModal from "../modal/PostMoreOptionModal";

const PostContainer = ({ posts }) => {
  const navigate = useNavigate();
  console.log("post", posts);
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

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <PostWrapper>
      <DisplayPostContainer>
        {posts?.map((item) => {
          let date = new Date(item.createdAt).getHours();
          return (
            <SinglePost key={item.author.createdAt}>
              <FlexContainer style={{justifyContent:"space-between", marginRight:"25px"}}>
                <PostMarginContainer
                  onClick={() => handleUserClick(item.author._id)}
                >
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
                  <PostMoreOptionModal/>
              </FlexContainer>

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
              <DisplayReactions
                props={{ likes: item.likeCount, comments: item.commentCount }}
              />
              <ReactionsAndComments
                props={{ likes: item.likeCount, postId: item._id }}
              />
            </SinglePost>
          );
        })}
      </DisplayPostContainer>
    </PostWrapper>
  );
};

export default PostContainer;
