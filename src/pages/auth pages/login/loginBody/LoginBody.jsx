import React from "react";
import LoginWlcText from "./LoginWlcText";
import LoginForm from "./LoginForm";
import { Image } from "react-bootstrap";

import SideImage from "./../../../../assets/Images/Linkedin-login.png";
import { LoginBodyContainer } from "../../../../components/Styles/LoginStyle";

const LoginBody = () => {
  return (
    <LoginBodyContainer>
      <div>
        <LoginWlcText />
        <LoginForm />
      </div>

      <Image src={SideImage} />
    </LoginBodyContainer>
  );
};

export default LoginBody;
