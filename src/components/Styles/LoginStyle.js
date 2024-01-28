import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { FlexContainer, LinkContainer, NavbarRightItems } from "./Style";

export const LoginWrapper = styled(Wrapper)`
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
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
`;

export const GetTheAppContainer = styled(LoginItemsContainer)`
border-left: 1px solid lightgray;
border-right: 1px solid lightgray;
padding: 5px 15px;
`
export const JoinNowContainer = styled(LinkContainer)`
font-weight: 100;
height: 40px;
width: 80px;
padding: 5px;
opacity: 0.8;
border-radius: 40px;
&:hover{
    background-color: lightgray;
}
`
export const SignUpContainer = styled(JoinNowContainer)`
border: 1px solid #004182;
color: #004182;
&:hover{
    background-color: #F0F7FE;
}
`