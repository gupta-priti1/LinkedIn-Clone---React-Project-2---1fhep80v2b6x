import React from 'react'
import LoginNavbar from './LoginNavbar'
import LoginBody from './loginBody/LoginBody'
import { LoginWrapper } from '../../../components/Styles/LoginStyle'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginNavbar/>
      <LoginBody/>
    </LoginWrapper>
  )
}

export default Login