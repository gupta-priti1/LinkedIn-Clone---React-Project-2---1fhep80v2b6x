import React, { createContext, useContext, useState } from "react";

const TokenStore = createContext();
const AccessTokenContext = ({ children }) => {
  const accessTokenFromLocalStorage = localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken"))
    : "";
  const [accessToken, setAccessToken] = useState(accessTokenFromLocalStorage);
  return (
    <>
      <TokenStore.Provider value={{ accessToken, setAccessToken }}>
        {children}
      </TokenStore.Provider>
    </>
  );
};

export const accessTokenApi = () => useContext(TokenStore);
export default AccessTokenContext;
