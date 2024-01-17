import React from 'react'
import { Wrapper } from '../components/Styles/Wrapper';
import UserInfo from '../components/Home/UserInfo';
import Post from '../components/Home/Post';
import News from '../components/Home/News';

const Home = () => {
  return (
    <Wrapper>
      <UserInfo/>
      <Post/>
      <News/>
    </Wrapper>
  )
}

export default Home;