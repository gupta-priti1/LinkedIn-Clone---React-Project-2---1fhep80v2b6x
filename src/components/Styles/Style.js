import styled from "styled-components";
import { MenuItem } from "@mui/material";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74%;

  @media only screen and (max-width: 872px) {
    width: 95%;
  }
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

  @media only screen and (max-width: 492px) {
    display: none;
  }
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
  @media only screen and (max-width: 872px) {
    display: none;
  }
`;
export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DropDownItems = styled(MenuItem)`
  text-decoration: none;
  background-color: white !important;
  .link {
    padding: 10px;
    color: #000;
    width: 80%;
    &:hover {
      background-color: #bdbdbd;
      text-decoration: underline;
    }
  }
  .profile {
    border: 1px solid #0a66c2;
    border-radius: 50px;

    &:hover {
      background-color: #378fe9;
    }
  }
`;

export const SmallScreenMenuDisplay = styled.div`
  display: none;

  @media only screen and (max-width: 492px) {
    display: block;
  }
`;

export const SidebarContainer = styled.div`
  background-color: white;
  position: absolute;
  padding: 5px;
  right: 0;
  top: 8vh;
  width: 40%;
  border-radius: 10px;

  .link {
    padding: 10px;
    color: #000;
    width: 80%;
    &:hover {
      background-color: #bdbdbd;
      text-decoration: underline;
    }
  }
  .profile {
    border: 1px solid #0a66c2;
    border-radius: 50px;
    &:hover {
      background-color: #378fe9;
    }
  }
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
  /* background-color: red; */
  position: relative;
`;
export const UserInfoDetailsContainer = styled.div`
  background-color: white;
  border-radius: 15px;
`;

export const UserDetails = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  margin-top: 45px;
  padding-left: 5px;
  h4,
  p {
    margin: 0;
  }
  h4 {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const UserImpression = styled(FlexContainer)`
  width: 85%;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-between;
  padding-left: 5px;
  p {
    opacity: 0.7;
  }

  span {
    color: #0a77cd;
  }
`;

export const HrTag = styled.hr`
  opacity: 0.7;
  width: 95%;
`;
export const UserPremium = styled(FlexContainer)`
  flex-direction: column;
  gap: 4px;
  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 13px;
    opacity: 0.6;
  }
  p {
    margin-bottom: 5px;
    &:hover {
      color: #0a77cd;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
export const GropusContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  h3 {
    margin: 15px 10px 5px 20px;
    font-size: 14px;
    color: #0a77cd;
  }
`;
export const DiscoverMoreButton = styled.div`
  text-align: center;
  height: 40px;
  opacity: 0.7;
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
    width: 100%;
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
  overflow-x: hidden;
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
  color: #5e5e5e;
  font-size: 14px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e5e3e0;
  .like-icon {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    color: #d0e8ff;
  }
  h4 {
    font-weight: 200;
    margin: 0;
  }
`;
export const ReactionsContainer = styled(FlexContainer)`
  justify-content: space-between;
  width: 90%;
  /* background-color: aqua; */
  padding: 3px;
`;

export const SingleReaction = styled(FlexContainer)`
  color: #6b6b6b;
  height: 45px;
  width: 100px;
  justify-content: center;
  padding: 5px;
  &:hover {
    background-color: #ebebeb;
    border-radius: 5px;
  }

  .icon {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .repost-icon {
    height: 20px;
  }
`;
export const LikeDisplayContainer = styled.div`
  background-color: #378fe9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

export const CommentInput = styled.input`
  width: 90%;
  padding: 8px;
  border-radius: 50px;
`;
export const CommentsContainer = styled(FlexContainer)`
  width: 95%;
  justify-content: space-between;
  padding: 0px 15px;
`;
export const CommentAuthorDetails = styled(FlexContainer)`
  flex-direction: column;
  align-items: start;
  width: 95%;
  background-color: #f2f2f2;
  margin: 5px 0px;
  padding: 10px;
  border-radius: 10px;

  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export const NewsContainer = styled.div`
  /* height:1000px; */
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* @media only screen and (max-width: 1072px) {
    display: none;
  } */
`;
export const TempContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2px 15px;
  h3 {
    font-size: 18px;
    margin: 10px 5px 5px 5px;
  }
`;

export const UlTemp = styled.ul`
  list-style-type: circle;
  padding: 0px 15px;
  li {
    margin: 15px 5px;
    h4 {
      margin: 5px;
    }
    p {
      margin: 5px;
      font-size: 14px;
      opacity: 0.7;
    }
  }
`;

export const ShowMoreButton = styled.button`
  width: 100%;
  padding: 3px;
  opacity: 0.7;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const Temp2Container = styled.div`
  position: sticky;
  top: 70px;
  overflow: auto;
`;
export const AdvertisementContainer = styled.div`
  background-color: white;
  text-align: center;
  padding: 0px 5px 15px 5px;
`;
export const AdImageContainer = styled(FlexContainer)`
  justify-content: center;
  gap: 20px;
`;
export const PremiumButton = styled.button`
  padding: 15px;
  width: 120px;
  border: 2px solid #70b5f9;
  border-radius: 50px;
  background-color: transparent;
  color: #70b5f9;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

// --------------------Modal------------------------
export const UserDetailsContainer = styled(FlexContainer)`
  justify-content: flex-start;
`;
export const Label = styled.label`
  font-size: 20px;
  padding: 0 5px;
  margin: 0;
`;
export const TextArea = styled.textarea`
  width: 95%;
  margin: auto;
  border: none;
  padding: 15px;
  font-size: 18px;
`;

// -------------------Footer------------------------------

export const FooterContainer = styled(FlexContainer)`
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  opacity: 0.7;
  font-size: 14px;
  a {
    text-decoration: none;
    color: black;
    p {
      margin: 5px;
      &:hover {
        text-decoration: underline;
        color: #0a66c2;
      }
    }
  }
`;
