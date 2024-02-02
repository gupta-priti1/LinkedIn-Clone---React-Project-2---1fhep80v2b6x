import React from "react";
import { UserInfoContainer } from "../Styles/Style";
import { Image } from "react-bootstrap";

import Background from "./../../assets/Images/user-background.png";
import UserImage from "../userImage/UserImage";

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Image src={Background} width={"100%"} />
      <div style={{ position: "absolute", top: "30px", left: "35%" }}>
        <UserImage
          userImageStyling={{
            width: "70px",
            height: "70px",
          }}
        />
      </div>
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", marginTop:"25px"}}>
        <h4>name</h4>
        <p>user details</p>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
