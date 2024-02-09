import React from "react";
import { FlexContainer, Temp2Container } from "../../Styles/Style";
import Advertisement from "./Advertisement";
import Footer from "../../footer/Footer";
import { Image } from "react-bootstrap";
import logo from './../../../assets/Images/linkedin-logo.svg'

const Temp2 = () => {
  return (
    <Temp2Container>
      <Advertisement />
      <Footer />
      <FlexContainer style={{justifyContent:"center",gap:0}}>
        <span style={{color:"#0a66c2", fontWeight:"500"}}>
          Linked
        </span>
          <Image src={logo} width={20} alt="logo" loading="lazy"/>
          <span>
          LinkedIn Corporation © 2024
          </span>
      </FlexContainer>
    </Temp2Container>
  );
};

export default Temp2;
