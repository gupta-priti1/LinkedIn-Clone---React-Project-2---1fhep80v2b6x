import React, { createContext, useContext, useState } from "react";

const SearchStore = createContext();
const SearchItemsContext = ({ children }) => {
  const [searchItems, setSearchItems] = useState([]);
  return (
    <>
      <SearchStore.Provider value={{ searchItems, setSearchItems }}>
        {children}
      </SearchStore.Provider>
    </>
  );
};

export const searchItemsContext = () => useContext(SearchStore);
export default SearchItemsContext;
