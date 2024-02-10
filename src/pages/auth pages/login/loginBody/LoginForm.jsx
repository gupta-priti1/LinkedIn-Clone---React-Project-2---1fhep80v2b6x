import React, { useState } from "react";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import {
  AlreadyUserButton,
  Form,
  FormInput,
} from "../../../../components/Styles/LoginStyle";
import Or from "../../../../components/FormOrComponent/Or";
import { accessTokenApi } from "../../../../components/context/AccessTokenContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContextApi } from "../../../../components/context/UserContext";
import { ToasterMessage } from "../../../../components/helper/ToastHelper";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setAccessToken } = accessTokenApi();
  const { userData, setUserData } = userContextApi();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          email: loginData.email,
          password: loginData.password,
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
      if (response.status === 200) {
        const accessToken = response.data.token;
        setAccessToken(response.data.token);
        setUserData(response.data.data);

        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        localStorage.setItem("userInfo", JSON.stringify(response.data.data));
        navigate("/");
      }
    } catch (error) {
      ToasterMessage("error", error.response.data.message);
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form onSubmit={handleLoginSubmit}>
      <label>Email:</label>
      <FormInput
        type="email"
        required
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      <label>Password:</label>
      <FormInput
        type="password"
        required
        placeholder="Password"
        onChange={handleChange}
        name="password"
      />
      <ButtonComponent text="Login" />
      <Or />
      <AlreadyUserButton type="button" onClick={() => navigate("/signup")}>
        New to LinkedIn? Join now
      </AlreadyUserButton>
    </Form>
  );
};

export default LoginForm;
