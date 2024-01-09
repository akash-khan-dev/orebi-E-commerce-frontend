import React from "react";
import addOne from "../../../assets/Images/Ad_1.png";
import addTwo from "../../../assets/Images/add2.png";
import addThree from "../../../assets/Images/Ad_3.png";
const Advertiser = () => {
  return (
    <>
      <section className="advertiser py-10 md:py-16 lg:py-20">
        <div className="container">
          <div className="flex gap-5">
            <div>
              <a href="#">
                <img src={addOne} alt="addOne" />
              </a>
            </div>
            <div className="flex flex-col justify-between">
              <a href="#">
                <img src={addTwo} alt="addTwo" />
              </a>
              <a href="#">
                <img src={addThree} alt="addThree" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advertiser;
