import React from "react";
import about1 from "../../../assets/Images/about1.png";
import about2 from "../../../assets/Images/about2.png";
import AboutUs from "./AboutUs";

const AboutComp = () => {
  return (
    <>
      <div>
        <div className="about_product">
          <div className="md:grid md:grid-cols-2 mt-5 gap-x-6">
            <div className="relative mb-10 md:mb-0 group overflow-hidden">
              <img
                src={about1}
                className="w-full h-full object-cover"
                alt="about1"
              />

              <button className="bg-black py-3 sm:py-4 lg:py-6 px-8 sm:px-12 lg:px-20 text-white font-primaryFont absolute bottom-8 md:opacity-0 md:-bottom-10 left-2/4 -translate-x-2/4 md:group-hover:bottom-8 md:group-hover:opacity-100 transition-all duration-150 ease-in-out">
                Our Brand
              </button>
            </div>
            <div className="relative group overflow-hidden">
              <img
                src={about2}
                className="w-full h-full object-cover"
                alt="about2"
              />
              <button className="bg-black py-3 md:py-4 lg:py-6 px-8 md:px-12 lg:px-20 text-white font-primaryFont absolute bottom-8 md:opacity-0 md:-bottom-10 left-2/4 -translate-x-2/4 md:group-hover:bottom-8 md:group-hover:opacity-100 transition-all duration-150 ease-in-out">
                Our Brand
              </button>
            </div>
          </div>
          <div className="information py-8 sm:py-10 md:py-15 lg:py-20">
            <p className="font-primaryFont font-normal text-sm sm:text-lg md:text-2xl lg:text-[40px] lg:leading-[52px] text-black">
              Orebi is one of the world’s leading ecommerce brands and is
              internationally recognized for celebrating the essence of classic
              Worldwide cool looking style.
            </p>
          </div>
        </div>
        <div className="about_us pb-8 sm:pb-10 md:pb-15 lg:pb-20">
          <div className="md:grid md:grid-cols-3 gap-x-6">
            <div className="pb-4 md:pb-0">
              <AboutUs
                title="Our Vision"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book."
              />
            </div>
            <div className="pb-4 md:pb-0">
              <AboutUs
                title="Our Story"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
              />
            </div>
            <div>
              <AboutUs
                title="Our Brands"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
