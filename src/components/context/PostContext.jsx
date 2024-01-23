import React, { createContext, useContext, useState } from "react";

const StorePostContext = createContext();
const PostContext = ({ children }) => {
  const [post, setPost] = useState([]);
  return (
    <>
      <StorePostContext.Provider value={{ post, setPost }}>
        {children}
      </StorePostContext.Provider>
    </>
  );
};

export const postContext = () => useContext();
export default PostContext;
