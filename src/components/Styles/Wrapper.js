import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const NavbarWrapper = styled(Wrapper)`
  background-color: white;
`;
export const DropDownWrapper = styled(Wrapper)`
  flex-direction: column;

  .menu-btn {
    padding: 0;
    margin: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    background-color: transparent;

    &:hover {
      color: black;
    }
  }
`;