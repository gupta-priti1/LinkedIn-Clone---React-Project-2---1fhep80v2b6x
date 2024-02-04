import styled from "styled-components";
import { FlexContainer } from "./Style";
import { Wrapper } from "./Wrapper";

export const UserProfileWrapper = styled(Wrapper)`
  width: 72%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;
export const SeperatorContainer = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 10px;
  padding-bottom: 15px;
`;
export const UserProfileDetailsContainer = styled(FlexContainer)`
  align-items: flex-start;
  flex-direction: column;
  /* background-color: white; */
`;
export const UserInfoContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  align-items: flex-start;
  padding: 5px 40px 0px 40px;

  h3 {
    margin: 2px;
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
