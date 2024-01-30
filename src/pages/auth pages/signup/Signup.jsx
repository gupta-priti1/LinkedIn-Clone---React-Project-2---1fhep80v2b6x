import React from 'react'
import LinkedinLogo from '../../../components/logo/LinkedinLogo'
import SignupBody from './SignupBody'
import { SignupWrapper } from '../../../components/Styles/SignupStyle'

const Signup = () => {
  return (
    <SignupWrapper>
        <LinkedinLogo/>
        <SignupBody/>
    </SignupWrapper>
  )
}

export default Signup