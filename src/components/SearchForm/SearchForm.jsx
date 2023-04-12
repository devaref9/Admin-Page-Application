import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import { SearchFormStyle, SearchIconWrapper } from "./SearchForm.style";

const SearchForm = ({ setSearchKey }) => {
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <SearchFormStyle>
      <input onChange={handleChange} type="text" placeholder="جستجوی نام فرد" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchFormStyle>
  );
};

export default SearchForm;
