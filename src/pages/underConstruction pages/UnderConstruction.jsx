import React, { useEffect } from "react";
import { Image } from "react-bootstrap";

import underConstructionImg from "./../../assets/Images/under-con.jpg";
import { FlexContainer } from "../../components/Styles/Style";
import { accessTokenApi } from "../../components/context/AccessTokenContext";
import { useNavigate } from "react-router-dom";
const UnderConstruction = () => {
  const { accessToken } = accessTokenApi();
  // const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === "") {
      navigate("/login");
      return;
    }
  }, []);
  return (
    <FlexContainer>
      <Image
        src={underConstructionImg}
        fluid
        loading="lazy"
        alt="under-construction"
        width={"60%"}
      />
    </FlexContainer>
  );
};

export default UnderConstruction;
