import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import { SearchFormStyle, SearchIconWrapper } from "./SearchForm.style";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredUsers } from "../../features/users";
import { useEffect } from "react";

const SearchForm = () => {
  const users = useSelector((state) => state.users.value);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    dispatch(setFilteredUsers({ searchKey: searchKey }));
  }, [searchKey, dispatch, users]);

  return (
    <SearchFormStyle>
      <input onChange={handleChange} type="text" placeholder="Search user" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchFormStyle>
  );
};

export default SearchForm;
