import React from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { TbRefresh } from "react-icons/tb";
import Badge from "./Badge";
const Product = ({ src, showBadge, badgeTile }) => {
  return (
    <>
      <div>
        <div className="relative overflow-hidden group">
          <div className="product-img">
            <img
              src={src}
              className="w-[100%] h-[100%] object-cover"
              alt="newOne"
            />
          </div>
          {showBadge && (
            <div className="product-badge">
              <Badge title={badgeTile} />
            </div>
          )}
          <div className="group-hover:bottom-0 hover:transition ease-in duration-300  py-[25px] pr-[30px] bg-white w-full absolute bottom-[-55%] lg:bottom-[-70%] left-0 text-end">
            <div className="flex justify-end items-center gap-4 cursor-pointer">
              <h5 className="font-normal font-primaryFont text-base text-[#767676] hover:text-[#262626] hover:font-bold hover:transition hover:ease-in-out hover:duration-300">
                Add to Wish List
              </h5>
              <AiFillHeart />
            </div>
            <div className="flex justify-end items-center gap-4 cursor-pointer py-4">
              <h5 className="font-normal font-primaryFont text-base text-[#767676] hover:text-[#262626] hover:font-bold hover:transition ease-in-out delay-150">
                Compare
              </h5>
              <TbRefresh />
            </div>
            <div className="flex justify-end items-center gap-4 cursor-pointer">
              <h5 className="font-normal font-primaryFont text-base text-[#767676] hover:text-[#262626] hover:font-bold hover:transition ease-in-out delay-150">
                Add to Cart
              </h5>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <div className="mt-6 flex justify-between">
            <h2 className="text-[#0f0e0e] font-semibold lg:font-bold text-xl sm:text-lg  lg:text-xl">
              Basic Crew Neck Tee
            </h2>
            <p className="text-[#767676] font-normal text-base">$44.00</p>
          </div>
          <span className="font-primaryFont font-normal text-base text-gray pt-[15px] block">
            Black
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
