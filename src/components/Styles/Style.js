import styled from "styled-components";
import { MenuItem } from "@mui/material";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;
`;
export const NavbarLeftItems = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 8px;
  align-items: center;
  width: 30%;
`;

export const SearchbarContainer = styled(NavbarContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 75%;
  background-color: #edf3f8;
  border-radius: 5px;
`;
export const SearchInput = styled(NavbarContainer)`
  input {
    text-align: left;
  }
  .MuiInputBase-root.MuiInput-root::before {
    border-bottom: none;
    content: none;
  }
  .MuiInputBase-root.MuiInput-root::after {
    border-bottom: none;
    content: none;
  }
  .MuiInputBase-root.MuiInput-root:hover {
    border-bottom: none;
  }
`;
export const NavbarRightItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  .link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .link:hover {
    color: black;
  }
  .navbar-icon {
    width: 25px;
    height: 22px;
  }
`;
export const NavbarLinkText = styled.h4`
  margin: 5px 0 0 0;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: none !important;
`;

export const DropDownItems = styled(MenuItem)`
  text-decoration: none;
  background-color: white !important;
`;
// ---------------Home------------------

export const HomeContainer = styled.div`
  display: flex;
  width: 74%;
  height: 100%;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  position: relative;
  padding-top: 45px;
`;

export const UserInfoContainer = styled.div`
width:225px;
background-color: red;
`
export const PostContainer = styled.div`
height:2000px;
width: 530px;
display: flex;
flex-direction: column;
align-items: center;
`
export const CreatePostContainer = styled.div`
width: 100%;
height: 116px;
background-color: white;
`
export const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 10px;
`
export const Button = styled.button`
width: 90%;
height: 45px;
border-radius: 55px;
text-align: start;
background-color: white;

&:hover{
  background-color: #EBEBEB;
}
`

export const NewsContainer = styled.div`
/* height:1000px; */
width: 300px;
`
export const TempContainer = styled.div`
height: 400px;
background-color: yellow;
`
export const Temp2Container = styled.div`
height: 600px;
background-color: green;
position: sticky;
top: 70px;
overflow: auto;
`