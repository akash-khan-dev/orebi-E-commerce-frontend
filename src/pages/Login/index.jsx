import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import InfoText from "../../components/common/Infotext";
import LoginForm from "../../components/pageComponent/login/LoginForm";
import NewCustomer from "../../components/pageComponent/login/NewCustomer";
const Login = () => {
  return (
    <>
      <section className="Login pb-28">
        <div className="container">
          <div className="bread_crumb">
            <Breadcrumb />
          </div>
          <div className="info_text pb-3 sm:pb-5 md:pb-7 lg:pb-14 border-b border-[#f0f0f0]">
            <InfoText
              text="Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the."
            />
          </div>
          <div className="login_form py-4 sm:py-5 md:py-7 lg:py-9 xl:py-10">
            <LoginForm />
          </div>
          <div className="new-customer">
            <NewCustomer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
