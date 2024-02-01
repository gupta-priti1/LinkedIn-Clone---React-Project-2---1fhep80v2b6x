import React from 'react'
import { UserInfoContainer } from '../Styles/Style'
import { Image } from 'react-bootstrap'

import Background from "./../../assets/Images/user-background.png"

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Image src={Background} width={'100%'}/>
    </UserInfoContainer>
  )
}

export default UserInfo