import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import AccountBody from "../../components/pageComponent/accountBody/AccountBody";

const Account = () => {
  return (
    <>
      <section className="My-account pb-24">
        <div className="container">
          <div className="bread-crumb">
            <Breadcrumb />
          </div>
          <div className="account-body">
            <AccountBody />
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
