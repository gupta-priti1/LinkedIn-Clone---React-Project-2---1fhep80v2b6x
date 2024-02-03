import { Avatar } from "@mui/material";
import React from "react";

const UserImage = ({userImageStyling}) => {
  return (
    <div className="user-photo" >
      <Avatar
        sx={userImageStyling}
        style={{border:"3.5px solid white"}}
      >
        R
      </Avatar>
    </div>
  );
};

export default UserImage;
