import React from "react";
import {
  AdImageContainer,
  AdvertisementContainer,
  FlexContainer,
  PremiumButton,
} from "../../Styles/Style";
import UserImage from "../../userImage/UserImage";
import premiumLogo from "./../../../assets/Images/premium-logo.png";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userContextApi } from "../../context/UserContext";

const Advertisement = () => {
  const { userData } = userContextApi();

  const navigate = useNavigate();
  return (
    <AdvertisementContainer>
      <FlexContainer style={{ justifyContent: "flex-end" }}>
        <p>Ad</p>
      </FlexContainer>
      <p>{userData.name}, unlock your full potential with LinkedIn Premium</p>
      <AdImageContainer>
        <div onClick={() => navigate(`/user/${userData._id}`)}>
          <UserImage
            userImageStyling={{
              width: "70px",
              height: "70px",
            }}
          />
        </div>
        <Image
          src={premiumLogo}
          width={65}
          onClick={() => navigate("/premium")}
        />
      </AdImageContainer>
      <p>See who's viewed your profile in the last 90 days</p>
      <PremiumButton onClick={() => navigate("/premium")}>
        Try for free
      </PremiumButton>
    </AdvertisementContainer>
  );
};

export default Advertisement;
