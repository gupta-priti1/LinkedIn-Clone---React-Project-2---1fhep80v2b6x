import React, { useState } from "react";
import Reactions from "./Reactions";
import Comments from "./Comments";

const ReactionsAndComments = ({ likeProps, props }) => {
  // console.log(props);
  const [show, setShow] = useState(false);
  return (
    <div>
      <Reactions likeProps={likeProps} show={{ show, setShow }} props={props} />
      {show && <Comments likeProps={likeProps} />}
    </div>
  );
};

export default ReactionsAndComments;
