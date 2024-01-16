import React from "react";
import Heading from "../../common/Heading";
import InfoText from "../../common/Infotext";
import Button from "../../common/Button";

const NewCustomer = () => {
  return (
    <>
      <div>
        <div className="new-customer-heading  pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-5">
          <Heading title="New Customer" />
        </div>
        <div className="new-customer-text pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-6">
          <InfoText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
        </div>
        <Button text="Continue" />
      </div>
    </>
  );
};

export default NewCustomer;
