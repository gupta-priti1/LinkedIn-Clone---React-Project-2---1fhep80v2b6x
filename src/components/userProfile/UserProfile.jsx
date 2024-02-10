import React from "react";
import UserDetails from "./UserDetails";
import { UserProfileWrapper } from "../Styles/ProfileStyle";
import Temp2 from "../Home/news/advertisement/Temp2";

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <UserDetails />
      <Temp2 />
    </UserProfileWrapper>
  );
};

export default UserProfile;
