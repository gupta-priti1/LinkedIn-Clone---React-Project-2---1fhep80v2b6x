import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { FlexContainer } from "./Style";

export const LoginWrapper = styled(Wrapper)`
flex-direction: column;
background-color: white;
height: 100%;
width: 100%;
justify-content: flex-start;
`

export const LoginContainer = styled(FlexContainer)`
justify-content: space-between;
width: 75%;
`