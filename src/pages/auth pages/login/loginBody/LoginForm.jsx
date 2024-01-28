import React from "react";
import ButtonComponent from "../../../../components/button/ButtonComponent";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginForm = () => {
  return (
    <LoginForm>
        <label>
            Email:
        </label>
        <input type="email" required/>
        <label>
            Password:
        </label>
        <input type="password" required/>
        <ButtonComponent text="Login"/>
    </LoginForm>
  );
};

export default LoginForm;
