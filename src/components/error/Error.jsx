import React from "react";
import errorImage from "./../../assets/Images/404-error.gif";
import { Button, Image } from "react-bootstrap";
import { SubmitButton } from "../Styles/LoginStyle";
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Image src={errorImage} />
      <SubmitButton style={{ width: 200 }} onClick={()=>navigate("/feed")}>Back to home</SubmitButton>
    </div>
  );
};

export default Error;
