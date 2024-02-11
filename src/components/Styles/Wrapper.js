import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const NavbarWrapper = styled(Wrapper)`
  background-color: white;
  height: 8vh;
  position: fixed;
  z-index: 9;
`;
export const DropDownWrapper = styled(Wrapper)`
  flex-direction: column;

  .menu-btn {
    padding: 0;
    margin: 0;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;

    &:hover {
      color: black;
      cursor: pointer;
    }
  }
  /* .menuItems ul{
    @media screen and (max-width: 400px) {
      display: none;
    }
  } */
`;
export const RoutesWrapper = styled(Wrapper)`
margin-top: ${props => props.loc === "/login" || props.loc === "/signup" ? "0" : "8vh"};
  /* margin-top: 8vh; */
  /* height: calc(100% - 8vh); */
`;
export const CommentsWrapper = styled(Wrapper)`
  flex-direction: column;
  gap: 20px;
`;

export const PostWrapper = styled(Wrapper)`
  width: 50%;
  min-width: 550px;
  flex-direction: column;
  /* overflow: auto;
  height: calc(100% - 8vh); */
  @media only screen and (max-width: 1240px) {
    /* width: 50%; */
    min-width: 0;
  }
  @media only screen and (max-width: 1072px){
    width: 70%;
  }
  @media only screen and (max-width: 590px){
    width: 95%;
  }
`;
export const SearchDisplayWrapper = styled(Wrapper)`
  gap: 20px;
  height: 100%;
  align-items: flex-start;
`;
