import React, { useEffect } from "react";
import UserInfo from "../../components/Home/UserInfo";
import Post from "../../components/Home/post/Post";
import News from "../../components/Home/news/News";
import { HomeContainer } from "../../components/Styles/Style";
import { accessTokenApi } from "../../components/context/AccessTokenContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { accessToken } = accessTokenApi();
  // const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  // console.log(accessToken, "accessToken");
  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
      return;
    }
  }, []);

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
