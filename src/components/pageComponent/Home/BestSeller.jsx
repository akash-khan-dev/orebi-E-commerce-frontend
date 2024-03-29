import React from "react";
import Heading from "../../common/Heading";
import NewProductOne from "../../../assets/Images/best.png";
import NewProductTwo from "../../../assets/Images/best2.png";
import NewProductThree from "../../../assets/Images/best3.png";
import NewProductFour from "../../../assets/Images/best4.png";
import Product from "../../common/Product";

const BestSeller = () => {
  return (
    <>
      <section className="best-seller">
        <div className="container">
          <div className="heading pb:2 md:pb:4 lg:pb-6">
            <Heading title={"Best Seller"} />
          </div>
          <div className="product flex gap-6 flex-wrap">
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductOne} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductTwo} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductThree} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductFour} showBadge={true} badgeTile="10%" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductTwo} showBadge={true} badgeTile="new" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductThree} showBadge={true} badgeTile="10%" />
            </div>
            <div className="sm:w-[47%] md:w-[31%] lg:w-[23.5%]">
              <Product src={NewProductOne} showBadge={true} badgeTile="10%" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
