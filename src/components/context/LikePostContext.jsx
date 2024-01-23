import React, { createContext, useContext, useState } from "react";

const LikeContext = createContext();
const LikePostContext = ({ children }) => {
  const [like, setLike] = useState(0);
  return (
    <>
      <LikeContext.Provider value={{ like, setLike }}>
        {children}
      </LikeContext.Provider>
    </>
  );
};

export const likePostContext = () => useContext(LikeContext);
export default LikePostContext;
