import { Input } from '@mui/material'
import React from 'react'
import { CommentInput, FlexContainer } from '../Styles/Style'
import UserImage from '../userImage/UserImage'

const Comments = () => {
  return (
    <FlexContainer>
        <UserImage/>
        <CommentInput/>
       
    </FlexContainer>
  )
}

export default Comments