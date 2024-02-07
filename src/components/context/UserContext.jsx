import React, { createContext, useContext, useState } from "react";

const UserStore = createContext();
const UserContext = ({ children }) => {
  const initialValue = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : '';
    console.log(initialValue,'initial');
  const [userData, setUserData] = useState(initialValue);
  return (
    <>
      <UserStore.Provider value={{ userData, setUserData }}>
        {children}
      </UserStore.Provider>
    </>
  );
};
export const userContextApi = ()=>useContext(UserStore);
export default UserContext;
