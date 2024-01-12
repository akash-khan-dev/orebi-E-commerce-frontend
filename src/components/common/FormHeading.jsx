import React from "react";

const FormHeading = ({ title }) => {
  return (
    <>
      <div className="form-title pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        <h3 className="font-primaryFont font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-[39px]">
          {title}
        </h3>
      </div>
    </>
  );
};

export default FormHeading;
