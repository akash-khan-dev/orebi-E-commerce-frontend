import React from "react";

const Input = ({ name, onChange, value, type, placeholder, label, id }) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="text-black font-primaryFont font-bold text-base"
        >
          {label}
        </label>
        <input
          className="block w-full focus:outline-none mt-1 md:mt-2 lg:mt-3 border-b border-[#F0F0F0] pb-2 placeholder:font-primaryFont placeholder:font-normal placeholder:text-sm placeholder:text-gray"
          onChange={onChange}
          value={value}
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
