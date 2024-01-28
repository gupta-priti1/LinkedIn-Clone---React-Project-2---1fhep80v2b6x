import React from 'react'
import { Button} from "@mui/material";

const ButtonComponent = ({text}) => {
  return (
    <Button type='submit' variant="contained">{text}</Button>
  )
}

export default ButtonComponent