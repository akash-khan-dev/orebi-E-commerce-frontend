import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import InfoText from "../../components/common/Infotext";
import SignUpForm from "../../components/pageComponent/registration/SignUpForm";

const Registration = () => {
  return (
    <section className="registration">
      <div className="container">
        <div className="bread-crumb">
          <Breadcrumb />
        </div>
        <div className="info_text pb-3 sm:pb-5 md:pb-7 lg:pb-14 border-b border-[#f0f0f0]">
          <InfoText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
        </div>
        <div className="registration-form py-4 sm:py-5 md:py-7 lg:py-9 xl:py-10">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default Registration;
