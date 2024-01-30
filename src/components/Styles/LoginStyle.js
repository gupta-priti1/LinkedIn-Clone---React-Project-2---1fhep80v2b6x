import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { FlexContainer, LinkContainer, NavbarRightItems } from "./Style";

export const LoginWrapper = styled(Wrapper)`
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  overflow: auto;

  @media only screen and (max-width: 1072px) {
    /* align-items: flex-start; */
  }
`;

// export const LoginContainer = styled(FlexContainer)`
// justify-content: space-between;
// width: 75%;
// `

export const Logo = styled(FlexContainer)`
  justify-content: center;
  gap: 0px;
  color: #0a66c2;

  .logo-text {
    font-size: 35px;
    font-weight: 600;
  }
`;

export const LoginItemsContainer = styled(LinkContainer)`
  opacity: 0.6;
  padding: 5px;
  &:hover {
    opacity: 1;
  }
  h4 {
    margin: 0;
    font-weight: 300;
  }

  @media only screen and (max-width: 1072px) {
    display: none;
  }
`;

export const GetTheAppContainer = styled(LoginItemsContainer)`
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 5px 15px;
`;
export const JoinNowContainer = styled(LinkContainer)`
  font-weight: 100;
  height: 40px;
  width: 80px;
  padding: 5px;
  opacity: 0.8;
  border-radius: 40px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
export const SignUpContainer = styled(JoinNowContainer)`
  border: 1px solid #004182;
  color: #004182;
  cursor: pointer;
  &:hover {
    background-color: #f0f7fe;
  }
`;

export const LoginBodyContainer = styled(FlexContainer)`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1072px) {
    justify-content: center;
    gap: 2rem;
  }
  @media only screen and (max-width: 772px) {
    flex-direction: column;
  }
`;
export const LoginText = styled.h1`
  font-size: 58px;
  font-weight: 200;
  color: #b24020;
  line-height: 4.5rem;
  margin: 0;
`;

export const LoginLeftContainer = styled(FlexContainer)`
  width: 30%;
  flex-direction: column;
  padding-left: 70px;
  font-size: 18px;

  @media only screen and (max-width: 772px) {
    width: 80%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
export const FormInput = styled.input`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 80%;
`;

export const SubmitButton = styled.button`
  background-color: #0a66c2;
  color: white;
  padding: 18px;
  width: 80%;
  font-size: 16px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
`;
export const AlreadyUserButton = styled(SubmitButton)`
  background-color: transparent;
  color: black;
  border: 1px solid black;
`;
