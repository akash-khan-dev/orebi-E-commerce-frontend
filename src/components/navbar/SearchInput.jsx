import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search Products"
          className="w-[100%] lg:w-[50%] border-0 py-1 lg:py-2 pl-5 pr-[42px] placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-primaryFont focus:outline-none "
        />
        <IoSearch className="text-xl translate-x-[-38px] fill-[#262626]" />
      </div>
    </>
  );
};

export default SearchInput;
