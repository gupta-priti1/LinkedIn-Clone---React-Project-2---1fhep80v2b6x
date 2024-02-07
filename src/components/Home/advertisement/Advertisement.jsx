import React from "react";
import { AdvertisementContainer } from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import premiumLogo from "./../../../assets/Images/premium-logo.png"
import { Image } from "react-bootstrap";

const Advertisement = () => {
  return (
    <AdvertisementContainer>
      <p>Ad</p>
      <p>abcdef123, unlock your full potential with LinkedIn Premium</p>
      <UserImage />
      <Image src={premiumLogo} width={50}/>
    </AdvertisementContainer>
  );
};

export default Advertisement;
