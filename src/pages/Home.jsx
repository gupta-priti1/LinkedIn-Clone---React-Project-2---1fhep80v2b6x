import React from "react";
import { Wrapper } from "../components/Styles/Wrapper";
import UserInfo from "../components/Home/UserInfo";
import Post from "../components/Home/Post";
import News from "../components/Home/News";
import { HomeContainer } from "../components/Styles/Style";

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <UserInfo />
        <Post />
        <News />
      </HomeContainer>
    </Wrapper>
  );
};

export default Home;
