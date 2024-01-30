import React from 'react'
import { AgreementText, FormSignup, OrContainer, SignupInput } from '../../../components/Styles/SignupStyle'
import ButtonComponent from '../../../components/button/ButtonComponent'
import Or from '../../../components/FormOrComponent/Or'

const SignupForm = () => {
  return (
    <FormSignup>
      <label>User name:</label>
      <SignupInput type='text' required/>
      <label>Email:</label>
      <SignupInput type='email' required/>
      <label>Password:</label>
      <SignupInput type='password' required/>
      <AgreementText>By clicking Agree & Join, you agree to the LinkedIn User <span>Agreement</span>, <span>
      Privacy Policy  </span>and <span>Cookie Policy</span>.</AgreementText>
      <ButtonComponent text='Agree and Join'/>

      <Or/>
      <AgreementText>Already on LinkedIn? <span>Sign In</span> </AgreementText>
    </FormSignup>
  )
}

export default SignupForm