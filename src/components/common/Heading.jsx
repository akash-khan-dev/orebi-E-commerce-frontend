import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[39px] text-[#262626] font-primaryFont">
      {title}
    </h2>
  );
};

export default Heading;
