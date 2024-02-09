import { Avatar } from "@mui/material";
import React from "react";
import { Image } from "react-bootstrap";

const UserImage = ({ userImageStyling, profileImage, name }) => {
  return (
    <>
      {profileImage ? (
        <Image
          src={profileImage}
          alt="profile-image"
          loading="lazy"
          style={{
            ...userImageStyling,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      ) : (
        <div className="user-photo">
          <Avatar
            sx={userImageStyling}
            style={{ border: "3.5px solid white", cursor: "pointer" }}
          >
            {name?.charAt(0).toUpperCase()}
          </Avatar>
        </div>
      )}
    </>
  );
};

export default UserImage;
