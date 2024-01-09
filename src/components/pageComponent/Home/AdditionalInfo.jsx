import React from "react";
import { BiSolidTruck } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
const AdditionalInfo = () => {
  return (
    <>
      <section className="additional-info py-2 lg:py-4 border-b border-[#f0f0f0]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 sm:gap-2 items-center">
              <h3 className="text-black text-xl sm:text-4xl font-bold">2</h3>
              <p className="font-primaryFont font-normal text-xs sm:text-base text-[#6D6D6D]">
                Two years warranty
              </p>
            </div>
            <div className="flex gap-1 sm:gap-2 items-center">
              <div className="text-black text-xl sm:text-4xl font-bold ">
                <BiSolidTruck />
              </div>
              <h4 className="font-primaryFont font-normal first-letter text-xs sm:text-base text-[#6D6D6D]">
                Free shipping
              </h4>
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-black text-xl sm:text-4xl font-bold ">
                <TbReload />
              </div>
              <h4 className="font-primaryFont font-normal text-xs sm:text-base text-[#6D6D6D]">
                Free shipping
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalInfo;
