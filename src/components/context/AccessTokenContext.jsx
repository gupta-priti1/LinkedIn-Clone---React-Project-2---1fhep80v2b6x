import React, { createContext, useContext, useState } from "react";

const TokenStore = createContext();
const AccessTokenContext = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');
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
