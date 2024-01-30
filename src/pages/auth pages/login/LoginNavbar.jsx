import { Image } from "@mui/icons-material";
import React from "react";

// import logo from "./../../../assets/Images/linkedin-logo.svg"
// import logo from "./../../assets/Images/linkedin-logo.svg";
// import logo from "./../../../assets/Images/linkedin-logo.svg";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaRegNewspaper } from "react-icons/fa";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IoLogoYoutube } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import {GetTheAppContainer, JoinNowContainer, LoginItemsContainer, Logo, SignUpContainer } from "../../../components/Styles/LoginStyle";
import { NavbarContainer, NavbarRightItems } from "../../../components/Styles/Style";
import LinkedinLogo from "../../../components/logo/LinkedinLogo";
import { useNavigate } from "react-router-dom";

const LoginNavbar = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <LinkedinLogo/>
      <NavbarRightItems>
        <LoginItemsContainer>
          <FaRegNewspaper style={{ fontSize: "28px" }} className="icon"/>
          <h4>Articles</h4>
        </LoginItemsContainer>
        <LoginItemsContainer>
          <PeopleAltIcon style={{ fontSize: "26px" }} />
          <h4>People</h4>
        </LoginItemsContainer>
        <LoginItemsContainer>
          <IoLogoYoutube style={{ fontSize: "25px" }} />
          <h4>Learning</h4>
        </LoginItemsContainer>
        <LoginItemsContainer>
          <BsFillBriefcaseFill style={{ fontSize: "25px" }} />
          <h4>Jobs</h4>
        </LoginItemsContainer>
        <GetTheAppContainer >
          <LaptopMacIcon style={{ fontSize: "30px" }} />
          <h4>Get the app</h4>
        </GetTheAppContainer>
        <JoinNowContainer onClick={()=>navigate('/signup')}>
          <h4>Join now</h4>
        </JoinNowContainer>
        <SignUpContainer onClick={()=>navigate('/signup')}>
          <h4>Sign Up</h4>
        </SignUpContainer>
      </NavbarRightItems>
    </NavbarContainer>
  );
};

export default LoginNavbar;
