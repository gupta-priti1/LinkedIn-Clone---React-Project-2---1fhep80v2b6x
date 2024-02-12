import React, { useState } from "react";
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
import SingleComponent from "./SingleComponent";

const PostContainer = ({ posts, props }) => {
  // console.log("post", props);

  // const Item = (props) => {
  //   return (
  //     <img
  //       src={props.img}
  //       alt="image"
  //       width={"100%"}
  //       height={"350px"}
  //       loading="lazy"
  //     />
  //   );
  // };
  // const { refetchingPost, setRefetchingPost } = props;
  // console.log({refetchingPost, setRefetchingPost});
 
  return (
    <DisplayPostContainer>
      {posts?.map((item, index) => {
        let date = new Date(item.createdAt).getHours();
        return (
          // <SinglePost key={item.author.createdAt}>
          //   <FlexContainer
          //     style={{ justifyContent: "space-between", marginRight: "25px" }}
          //   >
          //     <PostMarginContainer
          //       onClick={() => handleUserClick(item.author._id)}
          //     >
          //       <UserImage
          //         userImageStyling={{
          //           width: 35,
          //           height: 35,
          //           marginTop: "2px",
          //           backgroundColor: "green",
          //           color: "white !important",
          //           fontSize: 12,
          //         }}
          //         profileImage={item.author.profileImage}
          //         name={item.author.name}
          //       />

          //       <PostUserDetails>
          //         <h4>{item.author.name}</h4>
          //         <p>
          //           {date}hrs •{" "}
          //           <span>
          //             <MdPublic />
          //           </span>
          //         </p>
          //       </PostUserDetails>
          //     </PostMarginContainer>

          //     <PostMoreOptionModal id={item._id} props={props}/>

          //   </FlexContainer>

          //   <PostPara>{item.content}</PostPara>
          //   <Carousel
          //     autoPlay={false}
          //     animation={"slide"}
          //     cycleNavigation={false}
          //   >
          //     {item?.images?.map((img) => (
          //       <Item img={img} />
          //     ))}
          //   </Carousel>
          //   <DisplayReactions
          //     props={{ likes: item.likeCount, comments: item.commentCount, likePost:likePost , setLikePost:setLikePost}}
          //   />
          //   <ReactionsAndComments
          //     likeProps={{ likes: item.likeCount, postId: item._id ,likePost:likePost, setLikePost:setLikePost}}
          //     props={props}
          //   />
          // </SinglePost>
          <SingleComponent item={item} date={date} props={props} />
        );
      })}
    </DisplayPostContainer>
  );
};

export default PostContainer;
