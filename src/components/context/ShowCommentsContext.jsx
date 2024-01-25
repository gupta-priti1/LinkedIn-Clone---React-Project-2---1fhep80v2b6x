import React, { createContext, useContext, useState } from "react";

const StoreShowComments = createContext();
const ShowCommentsContext = ({ children }) => {
  const [showComments, setShowComments] = useState([]);
  return (
    <>
      <StoreShowComments.Provider value={{ showComments, setShowComments }}>
        {children}
      </StoreShowComments.Provider>
    </>
  );
};

export const showCommentsContext = () => useContext(StoreShowComments);
export default ShowCommentsContext;
