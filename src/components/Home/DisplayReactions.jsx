import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { DisplayReactionsContainer, FlexContainer } from "../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
const DisplayReactions = () => {
  return (
    <Wrapper>
      <DisplayReactionsContainer>
        <FlexContainer>
          <FaThumbsUp />
          <h4>0</h4>
        </FlexContainer>
        <FlexContainer>
          <h4>0 comments</h4>
        </FlexContainer>
      </DisplayReactionsContainer>
    </Wrapper>
  );
};

export default DisplayReactions;
