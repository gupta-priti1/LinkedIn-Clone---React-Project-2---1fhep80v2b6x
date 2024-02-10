import React, { useState } from "react";
import {
  AgreementText,
  FormSignup,
  OrContainer,
  SignupInput,
} from "../../../components/Styles/SignupStyle";
import ButtonComponent from "../../../components/button/ButtonComponent";
import Or from "../../../components/FormOrComponent/Or";
import axios from "axios";
import { accessTokenApi } from "../../../components/context/AccessTokenContext";
import { Link, useNavigate } from "react-router-dom";
import { userContextApi } from "../../../components/context/UserContext";
import { ToasterMessage } from "../../../components/helper/ToastHelper";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setAccessToken } = accessTokenApi();
  const { setUserData } = userContextApi();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(setAccessToken);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
          appType: "linkedin",
        },
        {
          headers: {
            projectID: "hv45l4abtvvc",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.status === 201) {
        const accessToken = response.data.token;
        setAccessToken(response.data.token);
        setUserData(response.data.data);

        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );
        navigate("/");
      }
    } catch (error) {
      ToasterMessage("error", error.response.data.message);
    }
  };
  return (
    <FormSignup onSubmit={handleSignupSubmit}>
      <label>User name:</label>
      <SignupInput
        type="text"
        required
        onChange={handleChange}
        placeholder="Name"
        name="name"
      />
      <label>Email:</label>
      <SignupInput
        type="email"
        required
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      <label>Password:</label>
      <SignupInput
        type="password"
        required
        placeholder="Password"
        onChange={handleChange}
        name="password"
      />
      <AgreementText>
        By clicking Agree & Join, you agree to the LinkedIn{" "}
        <Link to="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement">
          User Agreement
        </Link>
        ,{" "}
        <Link to="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy">
          Privacy Policy{" "}
        </Link>
        and{" "}
        <Link to="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy">
          Cookie Policy
        </Link>
        .
      </AgreementText>
      <ButtonComponent text="Agree and Join" />

      <Or />
      <AgreementText>
        Already on LinkedIn?{" "}
        <span onClick={() => navigate("/login")}>Sign In</span>{" "}
      </AgreementText>
    </FormSignup>
  );
};

export default SignupForm;
