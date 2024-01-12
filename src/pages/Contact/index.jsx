import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ContactForm from "../../components/pageComponent/contact/ContactForm";
import GoogleMap from "../../components/pageComponent/contact/GoogleMap";
const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="bread_crumb">
            <Breadcrumb />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="contact-form">
              <ContactForm />
            </div>
            <div className="google_map pb-10 lg:pb-0">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
