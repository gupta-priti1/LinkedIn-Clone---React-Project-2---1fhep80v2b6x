import React from 'react'
import { SignupBodyContainer, SignupText } from '../../../components/Styles/SignupStyle'
import SignupForm from './SignupForm'

const SignupBody = () => {
  return (
    <SignupBodyContainer>
    <SignupText>Make the most of your professional life</SignupText>
    <SignupForm/>
    </SignupBodyContainer>
  )
}

export default SignupBody