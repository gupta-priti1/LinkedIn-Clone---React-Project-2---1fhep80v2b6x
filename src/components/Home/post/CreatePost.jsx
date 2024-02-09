import React from "react";
import { Wrapper } from "../../Styles/Wrapper";
import {
  Button,
  CreatePostContainer,
  CreatePostTitle,
  FlexContainer,
  PostMediasContainer,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import { RiImage2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import BasicModal from "../../modal/BasicModal";
import { userContextApi } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { userData } = userContextApi();
  
  return (
    <Wrapper>
      <CreatePostContainer>
        <FlexContainer>
          <span onClick={()=>navigate(`/user/${userData._id}`)}>
            <UserImage
              userImageStyling={{
                width: 45,
                height: 45,
                marginTop: "2px",
                backgroundColor: "#0A66C2",
                color: "white !important",
                fontSize: 18,
              }}
              name={userData.name}
              profileImage={userData.profileImage}
            />
          </span>

          <BasicModal />
        </FlexContainer>

        <FlexContainer>
          <PostMediasContainer>
            <RiImage2Fill fontSize="28px" color="#378FE9" />
            <CreatePostTitle>Media</CreatePostTitle>
          </PostMediasContainer>

          <PostMediasContainer>
            <FaCalendarAlt fontSize="22px" color="#C37D16" />
            <CreatePostTitle>Event</CreatePostTitle>
          </PostMediasContainer>

          <PostMediasContainer>
            <RiArticleFill fontSize="24px" color="#E06847" />
            <CreatePostTitle>Write article</CreatePostTitle>
          </PostMediasContainer>
        </FlexContainer>
      </CreatePostContainer>
    </Wrapper>
  );
};

export default CreatePost;
