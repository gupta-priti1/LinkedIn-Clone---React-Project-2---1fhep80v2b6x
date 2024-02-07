import React from "react";
import { UserDetails, UserInfoContainer } from "../Styles/Style";
import { Image } from "react-bootstrap";

import Background from "./../../assets/Images/user-background.png";
import UserImage from "../userImage/UserImage";
import { userContextApi } from "../context/UserContext";

const UserInfo = () => {
  const{userData} = userContextApi();
  console.log(userData,'userdata');
  return (
    <>
    <UserInfoContainer>
      <div style={{backgroundColor:"white"}}>
      <Image src={Background} width={"100%"} />
        <UserImage
          userImageStyling={{
            width: "70px",
            height: "70px",
            position: "absolute",
            top: "30px",
            left: "35%",
          }}
        />
      <UserDetails>
        <h4>name</h4>
        <p>user details</p>
      </UserDetails>

      <div>
        <div>
          <p>Profile viewers</p>
          <p>70</p>
        </div>
        <div>
          <p>Post impressions</p>
          <p>10</p>
        </div>
      </div>
      <div>
        <p>Access exclusive tools & insights</p>
        <p>Try Premium for free</p>
      </div>
      </div>
      
    <div style={{backgroundColor:"blue", zIndex:9, width:200, height:500}}>
      
    </div>
    </UserInfoContainer>
    </>
    
  );
};

export default UserInfo;
