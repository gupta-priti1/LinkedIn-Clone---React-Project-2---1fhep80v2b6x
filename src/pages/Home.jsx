import React from "react";
import { HomeWrapper, Wrapper } from "../components/Styles/Wrapper";
import UserInfo from "../components/Home/UserInfo";
import Post from "../components/Home/post/Post";
import News from "../components/Home/News";
import { HomeContainer } from "../components/Styles/Style";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <UserInfo />
        <Post />
        <News />
      </HomeContainer>
    </>
  );
};

export default Home;
