import React from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { useFormik } from "formik";
import InputError from "../../common/InputError";
import { contact } from "../../../validation/validation";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contact,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div>
        <div className="contact-heading">
          <FormHeading title="Fill up a Form" />
        </div>
        <div className="form pb-9 sm:pb-11 md:pb-16 lg:pb-24">
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-4">
              <Input
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Your Name here"
                label="Name"
                id="name"
              />
              <InputError
                error={formik.errors.name}
                touched={formik.touched.name}
              />
            </div>
            <div className="pb-4">
              <Input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Your email here"
                label="Email"
                id="email"
              />
              <InputError
                error={formik.errors.email}
                touched={formik.touched.email}
              />
            </div>
            <div className="text-area pb-4">
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
                onChange={formik.handleChange}
                value={formik.values.message}
                id="message"
                cols="40"
                rows="3"
                placeholder="Your message here"
              ></textarea>
              <InputError
                error={formik.errors.message}
                touched={formik.touched.message}
              />
            </div>
            <Button text={"Post"}></Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
