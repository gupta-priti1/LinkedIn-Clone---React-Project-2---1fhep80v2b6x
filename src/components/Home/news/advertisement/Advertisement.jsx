import React from "react";
import {
  AdImageContainer,
  AdvertisementContainer,
  FlexContainer,
  PremiumButton,
} from "../../../Styles/Style";
import UserImage from "../../../userImage/UserImage";
import premiumLogo from "./../../../assets/Images/premium-logo.png";
import { Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { userContextApi } from "../../../context/UserContext";

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
            name={userData.name}
          />
        </div>
        <Link to="https://premium.linkedin.com/">
          <Image
            src={premiumLogo}
            width={65}
            // onClick={() => navigate("/premium")}
            style={{ cursor: "pointer" }}
            alt="premiumLogo"
            loading="lazy"
          />
        </Link>
      </AdImageContainer>
      <p>See who's viewed your profile in the last 90 days</p>
      <Link to="https://premium.linkedin.com/">
        <PremiumButton>Try for free</PremiumButton>
      </Link>
    </AdvertisementContainer>
  );
};

export default Advertisement;
