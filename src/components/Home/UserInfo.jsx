import React from "react";
import {
  DiscoverMoreButton,
  GropusContainer,
  HrTag,
  UserDetails,
  UserImpression,
  UserInfoContainer,
  UserInfoDetailsContainer,
  UserPremium,
} from "../Styles/Style";
import { Image } from "react-bootstrap";

import Background from "./../../assets/Images/user-background.png";
import UserImage from "../userImage/UserImage";
import { userContextApi } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

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
        <UserInfoDetailsContainer>
          <div style={{position:"relative", height:"60px"}}>
            <Image
              src={Background}
              width={"100%"}
              style={{ borderRadius: "5px 5px 0px 0px" }}
              loading="lazy"
              height={"60px"}
              alt="background"
            />
            <div onClick={handleUserClick} style={{position:"absolute", top:"30px", left:'35%'}}>
              <UserImage
                userImageStyling={{
                  width: "70px",
                  height: "70px",
                  // position: "absolute",
                  // top: "30px",
                  // left: "35%",
                  fontSize: "30px",
                }}
                name={userData.name}
                profileImage={userData.profileImage}
              />
            </div>
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
            <Link className="link" to="https://premium.linkedin.com/">
              Try Premium for free
            </Link>
          </UserPremium>
        </UserInfoDetailsContainer>

        <UserInfoDetailsContainer style={{ marginTop: "10px" }}>
          <GropusContainer>
            <h3>Groups</h3>
            <h3>Events</h3>
            <h3>Followed Hashtags</h3>
          </GropusContainer>
          <HrTag />
          <DiscoverMoreButton>Discover more</DiscoverMoreButton>
        </UserInfoDetailsContainer>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
