import React from 'react'
import UserDetails from './UserDetails'
import Temp2 from '../Home/Temp2'
import { UserProfileWrapper } from '../Styles/ProfileStyle'

const UserProfile = () => {
  return (
    <UserProfileWrapper>
        <UserDetails/>
        <Temp2/>
    </UserProfileWrapper>
  )
}

export default UserProfile