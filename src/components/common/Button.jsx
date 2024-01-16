import React from "react";

const Button = ({ text }) => {
  return (
    <button className=" py-3 px-[50px] md:py-4 md:px-[65px] lg:py-4 lg:px-[74px] mt-5 lg:mt-2 border border-[#2b2b2b] bg-black text-white hover:md:text-black hover:bg-white transition duration-300 rounded-md font-primaryFont font-bold text-sm ">
      {text}
    </button>
  );
};

export default Button;
