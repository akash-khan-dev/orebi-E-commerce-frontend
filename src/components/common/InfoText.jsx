import React from "react";

const InfoText = ({ text }) => {
  return (
    <p className="max-w-[620px] font-primaryFont font-normal  text-xs sm:text-sm md:text-base text-gray">
      {text}
    </p>
  );
};

export default InfoText;
