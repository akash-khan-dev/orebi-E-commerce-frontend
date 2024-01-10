import React from "react";

const ShowProductInput = ({ show, option, setShowProduct }) => {
  return (
    <>
      <span className="hidden sm:inline-block font-primaryFont font-normal text-base text-gray mr-3">
        {show}:
      </span>
      <select
        onChange={(e) => setShowProduct(+e.target.value)}
        id="countries"
        class="lg:w-[239px] border border-[#f0f0f0] text-gray text-sm focus:border-black p-2"
      >
        {option.map((item, i) => (
          <option
            key={i}
            value={item.value}
            className="font-primaryFont font-normal text-base text-gray"
          >
            {item.productNumber}
          </option>
        ))}
      </select>
    </>
  );
};

export default ShowProductInput;
