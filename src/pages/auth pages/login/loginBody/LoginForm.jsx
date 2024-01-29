import React from "react";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import { Form, FormInput } from "../../../../components/Styles/LoginStyle";

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
    </Form>
  );
};

export default LoginForm;
