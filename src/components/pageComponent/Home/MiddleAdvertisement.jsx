import React from "react";
import addTwo from "../../../assets/Images/addvertise-two.png";
import { Link } from "react-router-dom";
const MiddleAdvertisement = () => {
  return (
    <>
      <section className="middleAdvertisement py-20">
        <div className="container">
          <div className="w-full">
            <Link to="/">
              <img className="w-full" src={addTwo} alt="addTwo" />{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleAdvertisement;
