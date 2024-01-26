import React, { createContext, useContext, useState } from "react";

const CommentsStore = createContext();
const CommentsContext = ({ children }) => {
  const [comments, setComments] = useState([]);
  return (
    <>
      <CommentsStore.Provider value={{ comments, setComments }}>
        {children}
      </CommentsStore.Provider>
    </>
  );
};

export const commentsContext = () => useContext(CommentsStore);
export default CommentsContext;
