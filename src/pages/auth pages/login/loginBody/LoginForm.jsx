import React from "react";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import { AlreadyUserButton, Form, FormInput } from "../../../../components/Styles/LoginStyle";
import Or from "../../../../components/FormOrComponent/Or";

const LoginForm = () => {
  return (
    <Form>
        <label>
            Email:
        </label>
        <FormInput type="email" required/>
        <label>
            Password:
        </label>
        <FormInput type="password" required/>
        <ButtonComponent text="Login"/>
        <Or/>
        <AlreadyUserButton type="button">New to LinkedIn? Join now</AlreadyUserButton>
    </Form>
  );
};

export default LoginForm;
