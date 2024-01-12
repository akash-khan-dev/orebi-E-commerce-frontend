import React from "react";
import AboutComp from "../../components/pageComponent/about/AboutComp";
import Breadcrumb from "../../components/common/Breadcrumb";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="bread_crumb">
            <Breadcrumb />
          </div>
          <div className="container">
            <AboutComp />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
