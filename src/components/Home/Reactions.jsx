import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { FlexContainer } from "../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

const Reactions = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <FaThumbsUp />
        <h4>Like</h4>
      </FlexContainer>
      <FlexContainer>
        <BsChatText />
        <h4>Comment</h4>
      </FlexContainer>
      <FlexContainer>
        <BiRepost />
        <h4>Repost</h4>
      </FlexContainer>
      <FlexContainer>
        <RiSendPlaneFill />
        <h4>Send</h4>
      </FlexContainer>
    </Wrapper>
  );
};

export default Reactions;
