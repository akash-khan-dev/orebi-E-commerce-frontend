import React from "react";

const AboutUs = ({ title, description }) => {
  return (
    <>
      <h3 className="font-primaryFont text-xl md:text-2xl font-bold mb-2">
        {title}
      </h3>
      <p className="font-primaryFont font-normal text-sm md:text-base text-gray">
        {description}
      </p>
    </>
  );
};

export default AboutUs;
