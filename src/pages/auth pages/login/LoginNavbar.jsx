import { Image } from "@mui/icons-material";
import React from "react";

// import logo from "./../../../assets/Images/linkedin-logo.svg"
// import logo from "./../../assets/Images/linkedin-logo.svg";
import logo from "./../../../assets/Images/linkedin-logo.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaRegNewspaper } from "react-icons/fa";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { IoLogoYoutube } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { LoginContainer } from "../../../components/Styles/LoginStyle";
import { FlexContainer } from "../../../components/Styles/Style";

const LoginNavbar = () => {
  return (
    <LoginContainer>
      <div>
        <h2>Linked</h2>
        {/* <Image src={logo} width={"45px"}/> */}
        <LinkedInIcon style={{ fontSize: "70px" }} />
      </div>
      <FlexContainer>
        <span>
          <FaRegNewspaper style={{ fontSize: "30px" }} />
          <h4>Articles</h4>
        </span>
        <span>
          <PeopleAltIcon style={{ fontSize: "30px" }} />
          <h4>People</h4>
        </span>
        <span>
          <IoLogoYoutube style={{ fontSize: "30px" }} />
          <h4>Learning</h4>
        </span>
        <span>
          <BsFillBriefcaseFill style={{ fontSize: "30px" }} />
          <h4>Jobs</h4>
        </span>
        <span>
          <LaptopMacIcon style={{ fontSize: "30px" }} />
          <h4>Get the app</h4>
        </span>
        <span>
          <h4>Join now</h4>
        </span>
        <span>
          <h4>Sign in</h4>
        </span>
      </FlexContainer>
    </LoginContainer>
  );
};

export default LoginNavbar;
