import React from 'react'
import { Logo } from '../Styles/LoginStyle'

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LinkedinLogo = () => {
  return (
    <Logo>
        <h2 className="logo-text">Linked</h2>
        {/* <Image src={logo} width={"45px"}/> */}
        <LinkedInIcon style={{ fontSize: "40px" }} />
      </Logo>
  )
}

export default LinkedinLogo;