import React from 'react'
import { SubmitButton } from '../Styles/LoginStyle';

const ButtonComponent = ({text}) => {
  return (
    <SubmitButton type='submit' variant="contained">{text}</SubmitButton>
  )
}

export default ButtonComponent