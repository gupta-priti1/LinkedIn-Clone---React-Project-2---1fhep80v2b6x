import React from "react";
import LoginWlcText from "./LoginWlcText";
import LoginForm from "./LoginForm";
import { Image } from "react-bootstrap";

import SideImage from "./../../../../assets/Images/Linkedin-login.png";
import { LoginBodyContainer, LoginLeftContainer } from "../../../../components/Styles/LoginStyle";

const LoginBody = () => {
  return (
    <LoginBodyContainer>
      <LoginLeftContainer>
        <LoginWlcText />
        <LoginForm />
      </LoginLeftContainer>

      <Image src={SideImage} width={'50%'} height={600} fluid/>
    </LoginBodyContainer>
  );
};

export default LoginBody;
