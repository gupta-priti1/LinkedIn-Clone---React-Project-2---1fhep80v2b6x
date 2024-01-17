import styled from "styled-components";
import { MenuItem } from "@mui/material";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
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
`