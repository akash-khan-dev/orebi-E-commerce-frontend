import React from "react";

const Badge = ({ title }) => {
  return (
    <div className="flex justify-center items-center w-[80px] xl:w-[92px] h-[28px] xl:h-[35px] bg-[#262626] absolute top-6 left-6">
      <p className="text-white font-semibold xl:font-bold text-xs xl:text-sm font-primaryFont">
        {title}
      </p>
    </div>
  );
};

export default Badge;
