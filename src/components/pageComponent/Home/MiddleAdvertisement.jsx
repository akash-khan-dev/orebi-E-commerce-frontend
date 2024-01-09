import React from "react";
import addTwo from "../../../assets/Images/addvertise-two.png";
const MiddleAdvertisement = () => {
  return (
    <>
      <section className="middleAdvertisement py-20">
        <div className="container">
          <div className="w-full">
            <a href="#">
              <img className="w-full" src={addTwo} alt="addTwo" />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleAdvertisement;
