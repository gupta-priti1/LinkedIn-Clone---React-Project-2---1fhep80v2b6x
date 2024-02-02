import React from 'react'
import { UserInfoContainer } from '../Styles/Style'
import { Image } from 'react-bootstrap'

import Background from "./../../assets/Images/user-background.png"
import UserImage from '../userImage/UserImage'

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Image src={Background} width={'100%'}/>
      <div>
        <UserImage/>
      </div>
      <h4>name</h4>
      <p>user details</p>
    </UserInfoContainer>
  )
}

export default UserInfo