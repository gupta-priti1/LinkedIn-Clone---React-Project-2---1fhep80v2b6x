import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { Button, CreatePostContainer, FlexContainer } from "../Styles/Style";
import UserImage from "../userImage/UserImage";
import { SlPicture } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
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
            <SlPicture color="blue"  />
            <h4>Media</h4>
          </FlexContainer>
          <FlexContainer>
            <SlCalender />
            <h4>Event</h4>
          </FlexContainer>{" "}
          <FlexContainer>
            <RiArticleFill />
            <h4>Write article</h4>
          </FlexContainer>
        </FlexContainer>
      </CreatePostContainer>
    </Wrapper>
  );
};

export default CreatePost;
