import React from "react";

const SelectCategoryInput = ({ sortby, option }) => {
  return (
    <>
      <span className="hidden sm:inline-block font-primaryFont font-normal text-base text-gray i md:mb-0 mb-1 mr-3">
        {sortby}:
      </span>
      <select
        id="countries"
        class="lg:w-[239px] border border-[#f0f0f0] text-gray text-sm focus:border-black p-2"
      >
        {option.map((item, i) => (
          <option
            key={i}
            value={item.value}
            className=" font-primaryFont font-normal text-base text-gray"
          >
            {item.category}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectCategoryInput;
