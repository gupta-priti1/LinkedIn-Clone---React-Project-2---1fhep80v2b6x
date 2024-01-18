import React from 'react'
import { PostContainer } from '../Styles/Style'
import CreatePost from './CreatePost'
import DisplayPost from './DisplayPost'

const Post = () => {
  return (
    <PostContainer>
      <CreatePost/>
      <DisplayPost/>
    </PostContainer>
  )
}

export default Post