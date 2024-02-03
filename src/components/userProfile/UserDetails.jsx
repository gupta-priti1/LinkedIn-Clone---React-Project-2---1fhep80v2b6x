import React, { useEffect, useState } from "react";
import {
  UserInfoContainer,
  UserProfileDetailsContainer,
} from "../Styles/ProfileStyle";
import BackgroundImage from "./../../assets/Images/user-background.png";
import { Image } from "react-bootstrap";
import UserImage from "../userImage/UserImage";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

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
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  if (!user) {
    return <p>loading...</p>;
  }
  return (
    <UserProfileDetailsContainer>
      <div style={{ width: "100%", position: "relative" }}>
        <Image src={BackgroundImage} fluid width={"100%"} />
        <UserImage
          userImageStyling={{
            width: "150px",
            height: "150px",
            position: "absolute",
            top: "110px",
            left: "30px",
          }}
        />
      </div>

      <UserInfoContainer>
        <h3>
          {user.name}{" "}
          {user.gender === "male" ? (
            <span>(He/Him)</span>
          ) : (
            <span>(She/Her)</span>
          )}
        </h3>
        <div>
          {user?.skills?.map((skill) => {
            return <span>{skill} | </span>;
          })}
        </div>
        <div>
          {/* <span>{user.address[0]?.city}, </span>
          <span>{user.address[0]?.state}, </span>
          <span>{user.address[0]?.country} </span> */}

          <span>Contact info</span>
        </div>
        <p>296 connections</p>

        <div>
          <h3>Experience</h3>
          {
            user?.workExperience?.map((exp)=>{
              return(
                <div>
                  <p>{exp.designation}</p>
                  <p>{exp.companyName}</p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  <p>{exp.location}</p>
                  </div>
              )
            })
          }
        </div>
        <div>
          <h3>Education</h3>
          {user?.education?.map((edu) => {
            return (
              <div>
                <h4>{edu.schoolName}</h4>
                <p>{edu.degree}</p>
                <p>{edu.startDate}</p>
                <p>{edu.endDate}</p>
                <p>{edu.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Skills</h3>
          {user?.skills?.map((skill) => {
            return <p>{skill}</p>;
          })}
        </div>
      </UserInfoContainer>
    </UserProfileDetailsContainer>
  );
};

export default UserDetails;
