import React from "react";
import Heading from "../../common/Heading";
import Product from "../../common/Product";
import SpacialOne from "../../../assets/Images/spacial.png";
import SpacialTwo from "../../../assets/Images/spacial2.png";
import SpacialThree from "../../../assets/Images/spacial3.png";
import SpacialFour from "../../../assets/Images/spacial4.png";

const SpacialOffer = () => {
  return (
    <>
      <section className="spacial-offer py-5 pb-10  md:pb-14 lg:pb-20">
        <div className="container">
          <div className="heading pb:2 md:pb:4 lg:pb-6">
            <Heading title="Special Offers" />
          </div>
          <div className="product flex gap-6 flex-wrap">
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialOne} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialTwo} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialThree} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialFour} showBadge={true} badgeTile="10%" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialTwo} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialThree} showBadge={true} badgeTile="10%" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={SpacialOne} showBadge={true} badgeTile="10%" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpacialOffer;
