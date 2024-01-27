import React from "react";
import Temp2 from "../../../components/Home/Temp2";
import { SearchDisplayWrapper} from "../../../components/Styles/Wrapper";
import { FlexContainer } from "../../../components/Styles/Style";

const SearchDisplay = () => {
  return (
    <SearchDisplayWrapper>
      <FlexContainer>
        search
      </FlexContainer>
      <Temp2 />
    </SearchDisplayWrapper>
  );
};

export default SearchDisplay;
