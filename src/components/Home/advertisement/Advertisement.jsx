import React from "react";
import { AdImageContainer, AdvertisementContainer, FlexContainer, PremiumButton } from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import premiumLogo from "./../../../assets/Images/premium-logo.png";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Advertisement = () => {
    const navigate = useNavigate();
  return (
    <AdvertisementContainer>
      <FlexContainer style={{ justifyContent: "flex-end" }}>
        <p>Ad</p>
      </FlexContainer>
      <p>abcdef123, unlock your full potential with LinkedIn Premium</p>
      <AdImageContainer>
        <UserImage userImageStyling={{
            width:"70px",
            height:"70px"
        }}/>
        <Image src={premiumLogo} width={65} />
      </AdImageContainer>
      <p>See who's viewed your profile in the last 90 days</p>
      <PremiumButton onClick={()=>navigate("/premium")}>Try for free</PremiumButton>
    </AdvertisementContainer>
  );
};

export default Advertisement;
