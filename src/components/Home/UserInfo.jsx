import React from "react";
import {
  FlexContainer,
  HrTag,
  UserDetails,
  UserImpression,
  UserInfoContainer,
  UserPremium,
} from "../Styles/Style";
import { Image } from "react-bootstrap";

import Background from "./../../assets/Images/user-background.png";
import UserImage from "../userImage/UserImage";
import { userContextApi } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const { userData } = userContextApi();
  console.log(userData, "userdata");
  const handleUserClick = () => {
    console.log("clicked");
    navigate(`/user/${userData._id}`);
  };
  return (
    <>
      <UserInfoContainer>
        <div style={{ backgroundColor: "white" }}>
          <Image src={Background} width={"100%"} />
          <div onClick={handleUserClick}>
            <UserImage
              userImageStyling={{
                width: "70px",
                height: "70px",
                position: "absolute",
                top: "30px",
                left: "35%",
                fontSize: "30px",
              }}
              name={userData.name}
              profileImage={userData.profileImage}
            />
          </div>

          <UserDetails>
            <h4>{userData.name}</h4>
            <p>HTML | CSS | JavaScript | React</p>
          </UserDetails>
          <HrTag />
          <div>
            <UserImpression>
              <p>Profile viewers</p>
              <span>80</span>
            </UserImpression>
            <UserImpression>
              <p>Post impressions</p>
              <span>10</span>
            </UserImpression>
          </div>
          <HrTag />
          <UserPremium>
            <h3>Access exclusive tools & insights</h3>
            <p
              onClick={() => {
                navigate("/subscription");
              }}
            >
              Try Premium for free
            </p>
          </UserPremium>
        </div>

        <div
          style={{
            backgroundColor: "blue",
            width: 200,
            height: 500,
          }}
        ></div>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
