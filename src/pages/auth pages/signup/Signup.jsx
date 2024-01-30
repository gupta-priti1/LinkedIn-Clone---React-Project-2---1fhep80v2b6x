import React from "react";
import LinkedinLogo from "../../../components/logo/LinkedinLogo";
import SignupBody from "./SignupBody";
import {
  SignupNav,
  SignupWrapper,
} from "../../../components/Styles/SignupStyle";
import LoginNavbar from "../login/LoginNavbar";

const Signup = () => {
  return (
    <SignupWrapper>
      <SignupNav>
        <LinkedinLogo />
      </SignupNav>
      <SignupBody />
    </SignupWrapper>
  );
};

export default Signup;
