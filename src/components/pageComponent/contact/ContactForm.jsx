import React from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";

const ContactForm = () => {
  return (
    <>
      <div>
        <div className="contact-heading">
          <FormHeading title="Fill up a Form" />
        </div>
        <div className="form pb-9 sm:pb-11 md:pb-16 lg:pb-24">
          <form>
            <Input
              name="name"
              type="text"
              onChange=""
              value=""
              placeholder="Your Name here"
              label="Name"
              id="name"
            />
            <Input
              name="name"
              type="email"
              onChange=""
              value=""
              placeholder="Your email here"
              label="Email"
              id="email"
            />
            <div className="text-area">
              <label
                htmlFor="message"
                className="text-black font-primaryFont font-bold text-base "
              >
                Message
              </label>
              <textarea
                className="block w-full focus:outline-none mt-3 border-b
            border-[#F0F0F0] pb-2 placeholder:font-primaryFont
            placeholder:font-normal placeholder:text-sm placeholder:text-gray"
                name="message"
                onChange={""}
                value={""}
                id="message"
                cols="40"
                rows="3"
                placeholder="Your message here"
              ></textarea>
            </div>
            <div className="button">
              <button
                type="submit"
                className=" py-3 md:py-4 px-12 md:px-[77px] bg-black mt-5 md:mt-10 text-white font-bold text-sm font-primaryFont rounded-[10px]"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
