import { Avatar } from "@mui/material";
import React from "react";

const UserImage = ({userImageStyling}) => {
  return (
    <div className="user-photo">
      <Avatar
        sx={userImageStyling}
      >
        R
      </Avatar>
    </div>
  );
};

export default UserImage;
