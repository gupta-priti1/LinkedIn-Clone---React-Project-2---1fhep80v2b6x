import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
`;
export const DropDownWrapper = styled(Wrapper)`
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

    &:hover{
      color: black;
    }
  }
`;
