import React, { useEffect, useState } from "react";
import {
  ContactInfoConatiner,
  FollowedButton,
  GenderContainer,
  Heading,
  LighterPara,
  SeperatorContainer,
  Title,
  UserInfoContainer,
  UserProfileDetailsContainer,
} from "../Styles/ProfileStyle";
import BackgroundImage from "./../../assets/Images/user-background.png";
import { Image } from "react-bootstrap";
import UserImage from "../userImage/UserImage";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../Styles/Style";
import { SubmitButton } from "../Styles/LoginStyle";
import { followUser } from "../helper/Follow";
import { unfollowUser } from "../helper/Unfollow";
import ContactInfoModal from "../modal/ContactInfoModal";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [followed, setFollowed] = useState(false);

  //   console.log(id);
  useEffect(() => {
    fetchingUserInfo();
  }, []);
  const fetchingUserInfo = async () => {
    try {
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/linkedin/user/${id}`,
        {
          headers: {
            projectID: "hv45l4abtvvc",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWVhMWY1MmUyMWUyZjk3ZmVjMDM5NiIsImlhdCI6MTcwNTk0MzU0MSwiZXhwIjoxNzM3NDc5NTQxfQ.czAeNFN7xxc1ocRkvDlHlDJubmZ6mCGYAkgAFA4UM7w",
          },
        }
      );
      // console.log(response);
      if (response.status === 200) {
        setUser(response.data.data);
        setFollowed(user.isFollowed);
        console.log("refresh");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollowUser = () => {
    followUser(id);
    setFollowed(true);
  };

  const handleUnfollowUser = () => {
    unfollowUser(id);
    setFollowed(false);
  };

  console.log(user);

  if (!user) {
    return <p>loading...</p>;
  }
  return (
    <UserProfileDetailsContainer className="user-profile">
      <SeperatorContainer className="seperator">
        <div style={{ position: "relative", width: "100%", height: "150px" }}>
          <Image
            src={BackgroundImage}
            fluid
            width="100%"
            height="150px"
            style={{ borderRadius: "10px 10px 0px 0px" }}
          />
          <UserImage
            userImageStyling={{
              width: "150px",
              height: "150px",
              position: "absolute",
              bottom: "-70px",
              left: "30px",
              fontSize:"50px"
            }}
            profileImage={user.profileImage}
            name={user.name}
          />
        </div>

        <UserInfoContainer style={{ marginTop: "50px" }}>
          <h1>
            {user.name}{" "}
            {user?.gender === "male" ? (
              <GenderContainer>(He/Him)</GenderContainer>
            ) : (
              <GenderContainer>(She/Her)</GenderContainer>
            )}
          </h1>
          <div>
            {user?.skills?.map((skill) => {
              return <span>{skill} | </span>;
            })}
          </div>
          <div>
            {/* <span>{user.address[0]?.city}, </span>
            <span>{user.address[0]?.state}, </span>
            <span>{user.address[0]?.country} </span> */}

            <ContactInfoModal phone={user.phone} email={user.email} />
          </div>
          <ContactInfoConatiner>296 connections</ContactInfoConatiner>
          {followed === true ? (
            <FollowedButton followed={followed} onClick={handleUnfollowUser}>
              Following
            </FollowedButton>
          ) : (
            <FollowedButton onClick={handleFollowUser}>Follow</FollowedButton>
          )}
        </UserInfoContainer>
      </SeperatorContainer>

      <SeperatorContainer>
        <UserInfoContainer>
          <h3>Experience</h3>
          {user?.workExperience?.map((exp) => {
            return (
              <div>
                <Heading>{exp.designation}</Heading>
                <Title>{exp.companyName}</Title>
                <LighterPara>
                  {exp.startDate} - {exp.endDate}
                </LighterPara>
                <LighterPara>{exp.location}</LighterPara>
              </div>
            );
          })}
        </UserInfoContainer>
      </SeperatorContainer>

      <SeperatorContainer>
        <UserInfoContainer>
          <h3>Education</h3>
          {user?.education?.map((edu) => {
            return (
              <div>
                <Heading>{edu.schoolName}</Heading>
                <Title>{edu.degree}</Title>
                <LighterPara>
                  {edu.startDate} - {edu.endDate}
                </LighterPara>
                <LighterPara>{edu.description}</LighterPara>
              </div>
            );
          })}
        </UserInfoContainer>
      </SeperatorContainer>
      <SeperatorContainer>
        <UserInfoContainer>
          <h3>Skills</h3>
          {user?.skills?.map((skill) => {
            return <Title>{skill}</Title>;
          })}
        </UserInfoContainer>
      </SeperatorContainer>
    </UserProfileDetailsContainer>
  );
};

export default UserDetails;
