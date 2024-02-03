import styled from "styled-components";
import { FlexContainer } from "./Style";
import { Wrapper } from "./Wrapper";

export const UserProfileWrapper = styled(Wrapper)`
  width: 72%;
  background-color: pink;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
`;
export const UserProfileDetailsContainer = styled(FlexContainer)`
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  width: 80%;
`;
export const UserInfoContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
  margin-top: 22px;
  align-items: flex-start;
  padding: 5px 40px 0px 40px;

  h3{
    margin: 2px;
  }
`;
// {display:"flex",alignItems:"center", justifyContent:"center",marginTop:"22px"}}
