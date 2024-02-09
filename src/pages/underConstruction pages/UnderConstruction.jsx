import React from "react";
import { Image } from "react-bootstrap";

import underConstructionImg from "./../../assets/Images/under-con.jpg";
import { FlexContainer } from "../../components/Styles/Style";
const UnderConstruction = () => {
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
