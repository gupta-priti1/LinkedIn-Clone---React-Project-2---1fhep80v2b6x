import React, { useEffect } from "react";
import UserDetails from "./UserDetails";
import { UserProfileWrapper } from "../Styles/ProfileStyle";
import Temp2 from "../Home/news/advertisement/Temp2";
import { accessTokenApi } from "../context/AccessTokenContext";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { accessToken } = accessTokenApi();

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <UserProfileWrapper>
      <UserDetails />
      <Temp2 />
    </UserProfileWrapper>
  );
};

export default UserProfile;
