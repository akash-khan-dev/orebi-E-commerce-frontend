import React from "react";
import { ImCross } from "react-icons/im";
import cardImg from "../../assets/Images/card-prodect.png";
const Card = ({ openCard }) => {
  return (
    <>
      <div
        ref={openCard}
        className=" z-[999] w-[360px] border border-solid bg-[#F5F5F3]  border-[#f0f0f0]  rounded-md overflow-hidden absolute top-[150%] right-0"
      >
        <div className="p-5">
          <div className="flex justify-between items-center ">
            <div className="w-[80px]">
              <img src={cardImg} alt="card" />
            </div>
            <div className="w-[190px]">
              <h3 className="font-primaryFont font-bold text-sm text-black">
                Black Smart Watch
              </h3>
              <small className="font-primaryFont font-bold text-sm text-black">
                $44.00
              </small>
            </div>
            <div>
              <ImCross className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="bg-white p-5">
          <h4 className="text-black font-primaryFont font-bold text-base pb-3">
            <span className="text-[#767676] font-primaryFont font-normal text-base">
              Subtotal:
            </span>{" "}
            $44.00
          </h4>
          <div className="grid grid-cols-2 gap-5">
            <a
              href={"#"}
              className="py-3 px-10 border border-solid border-black font-primaryFont font-bold text-sm text-black"
            >
              View Cart
            </a>
            <a
              href={"#"}
              className="py-3 px-6 border border-solid border-black font-primaryFont font-bold text-sm text-white bg-black"
            >
              View Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
