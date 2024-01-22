import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { FlexContainer, ReactionsContainer, SingleReaction } from "../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

const Reactions = () => {
  return (
    <Wrapper>
      <ReactionsContainer>
        <SingleReaction>
          {/* <FaThumbsUp className="icon"/> */}
          <FaRegThumbsUp className="icon"/>
          <h4>Like</h4>
        </SingleReaction>
        <SingleReaction>
          <BsChatText />
          <h4>Comment</h4>
        </SingleReaction>
        <SingleReaction>
          <BiRepost className="repost-icon"/>
          <h4>Repost</h4>
        </SingleReaction>
        <SingleReaction>
          <RiSendPlaneFill />
          <h4>Send</h4>
        </SingleReaction>
      </ReactionsContainer>
    </Wrapper>
  );
};

export default Reactions;
