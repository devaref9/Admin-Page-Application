import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import { SearchFormStyle, SearchIconWrapper } from "./SearchForm.style";
import { motion } from "framer-motion";

const SearchForm = ({ setSearchKey }) => {
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <SearchFormStyle
      as={motion.form}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          stiffness: 85,
          restDelta: 0.0007,
        },
      }}
    >
      <input onChange={handleChange} type="text" placeholder="جستجوی نام فرد" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchFormStyle>
  );
};

export default SearchForm;
