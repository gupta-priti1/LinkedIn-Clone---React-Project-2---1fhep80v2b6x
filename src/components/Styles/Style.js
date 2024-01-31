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
export const DropDownContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
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
  padding-top: 15px;
`;

export const UserInfoContainer = styled.div`
  width: 225px;
  background-color: red;
`;

export const CreatePostContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  padding: 15px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e5e3e0;
  border-radius: 15px;
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;
export const PostMediasContainer = styled(FlexContainer)`
  padding: 8px;
  height: 28px;
  &:hover {
    background-color: #ebebeb;
    border-radius: 5px;
  }
`;
export const SortByContainer = styled(FlexContainer)`
  gap: 0;
  width: 100%;
  justify-content: space-between;
  height: 35px;
  hr {
    width: 80%;
    margin: 5px;
  }
`;
export const Button = styled.button`
  width: 90%;
  height: 45px;
  border: 1px solid #949494;
  border-radius: 55px;
  text-align: start;
  background-color: white;
  color: #949494;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background-color: #ebebeb;
  }
`;
export const CreatePostTitle = styled.h4`
  margin: 0;
  color: #5e5e5e;
`;
export const DisplayPostContainer = styled.div`
  width: 100%;
  padding: 0px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  overflow: auto;
`;
export const SinglePost = styled.div`
  width: 100%;
  background-color: white;
  border: 1px solid #e5e3e0;
  border-radius: 15px;
`;
export const PostMarginContainer = styled(FlexContainer)`
  margin: 6px 15px;
  justify-content: flex-start;
`;
export const PostPara = styled.p`
  margin: 14px 18px;
`;
export const PostUserDetails = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
export const DisplayReactionsContainer = styled(FlexContainer)`
justify-content: space-between;
width: 95%;
gap: 0;
color: #5E5E5E;
font-size: 14px;
padding-bottom: 5px;
border-bottom: 1px solid #e5e3e0;
.like-icon{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  color: #D0E8FF;
}
h4{
  font-weight: 200;
  margin: 0;
}
`
export const ReactionsContainer= styled(FlexContainer)`
justify-content: space-between;
width: 90%;
/* background-color: aqua; */
padding: 3px;
`

export const SingleReaction = styled(FlexContainer)`
color: #6B6B6B;
height: 45px;
width: 100px;
justify-content: center;
padding: 5px;
&:hover{
  background-color: #EBEBEB;
  border-radius: 5px;
}

.icon{
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.repost-icon{
  height: 20px;
}
`
export const LikeDisplayContainer = styled.div`
background-color: #378FE9;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
width: 20px;
height: 20px;
`

export const CommentInput = styled.input`
width: 90%;
padding: 8px;
border-radius: 50px;
`
export const CommentsContainer = styled(FlexContainer)`
width: 95%;
justify-content:space-between;
padding: 0px 15px;
`
export const CommentAuthorDetails = styled(FlexContainer)`
flex-direction: column;
align-items: start;
width: 95%;
background-color: #F2F2F2;
margin: 5px 0px;
padding: 10px;
border-radius: 10px;

h4{
  margin: 0;
}
p{
  margin: 0;
}
`
export const NewsContainer = styled.div`
  /* height:1000px; */
  width: 300px;
`;
export const TempContainer = styled.div`
  height: 400px;
  background-color: yellow;
`;
export const Temp2Container = styled.div`
  height: 600px;
  background-color: green;
  position: sticky;
  top: 70px;
  overflow: auto;
`;




// --------------------Search------------------------

