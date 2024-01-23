import React from "react";
import { Wrapper } from "../Styles/Wrapper";
import { FlexContainer, ReactionsContainer, SingleReaction } from "../Styles/Style";

import { FaThumbsUp } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import axios from "axios";

const Reactions = () => {

  const handleLikeClick = async()=>{
    console.log('liked');
    const response = await axios.post(
      'https://academics.newtonschool.co/api/v1/linkedin/like/65ab4d67277339d884512a41',
      '',
      {
        headers: {
          'projectID': 'hv45l4abtvvc',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w'
        }
      }
    );
    console.log(response);
  }
  return (
    <Wrapper>
      <ReactionsContainer>
        <SingleReaction onClick={handleLikeClick}>
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
