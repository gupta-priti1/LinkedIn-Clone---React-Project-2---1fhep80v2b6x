import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { Button, CreatePostContainer, CreatePostTitle, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { RiImage2Fill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";

const CreatePost = () => {
  return (
    <Wrapper>
      <CreatePostContainer>
        <FlexContainer>
          <UserImage
            userImageStyling={{
              width: 45,
              height: 45,
              marginTop: "2px",
              backgroundColor: "#0A66C2",
              color: "white !important",
              fontSize: 18,
            }}
          />
          <Button type="click">Start a post</Button>
        </FlexContainer>

        <FlexContainer>
          <FlexContainer>
            <RiImage2Fill fontSize='28px' color="#378FE9" />
            <CreatePostTitle>Media</CreatePostTitle>
          </FlexContainer>

          <FlexContainer>
            <FaCalendarAlt fontSize='22px' color="#C37D16" />
            <CreatePostTitle>Event</CreatePostTitle>
          </FlexContainer>

          <FlexContainer>
            <RiArticleFill fontSize='24px' color="#E06847" />
            <CreatePostTitle>Write article</CreatePostTitle>
          </FlexContainer>
        </FlexContainer>
      </CreatePostContainer>
    </Wrapper>
  );
};

export default CreatePost;
