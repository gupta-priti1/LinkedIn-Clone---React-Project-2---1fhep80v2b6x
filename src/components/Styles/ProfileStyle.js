import styled from "styled-components";
import { FlexContainer } from "./Style";
import { Wrapper } from "./Wrapper";
import { SubmitButton } from "./LoginStyle";

export const UserProfileWrapper = styled(Wrapper)`
  width: 72%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;
export const UserProfileDetailsContainer = styled(FlexContainer)`
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
`;

export const SeperatorContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding-bottom: 15px;
  width: 100%;
`;
export const UserInfoContainer = styled(FlexContainer)`
  flex-direction: column;
  width: calc(100% - 80px);
  margin-top: 5px;
  align-items: flex-start;
  padding: 10px 40px 0px 40px;

  h3 {
    margin: 0px;
    font-size: 22px;
  }
  h1 {
    margin: 3px;
  }
`;
export const GenderContainer = styled.span`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.6;
`;
export const ContactInfoConatiner = styled.span`
  color: #0a66c2;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Heading = styled.h3`
  margin: 2px 0px !important;
  font-size: 17px !important;
  font-weight: 600;
`;

export const Title = styled.p`
  margin: 2px;
`;

export const LighterPara = styled.p`
  margin: 2px;
  opacity: 0.7;
`;

export const FollowedButton = styled(SubmitButton)`
  width: 90px;
  padding: 7px;
  font-size: 14px;
  margin: 0;
  background-color: ${({ followed }) => followed && "transparent"};
  color: ${({ followed }) => followed && "black"};
  border: ${({ followed }) => followed && "1px solid black"};

  &:hover{
    background-color: ${({ followed }) => followed && "#EBEBEB"};
    border:${({ followed }) => followed && "2px solid black"}
  }
`;
