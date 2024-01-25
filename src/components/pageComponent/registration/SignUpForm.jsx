import React from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { useFormik } from "formik";
import { signUp } from "../../../validation/validation";
import InputError from "../../common/InputError";

const SignUpForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    postCode: "",
    division: "",
    district: "",
    password: "",
    repeatPassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signUp,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="border-b border-[#F0F0F0] pb-5 sm:pb-6 md:pb-8 lg:pb-10">
            <FormHeading title="Your Personal Details" />
            <div className="">
              <div className="grid grid-cols-2  gap-x-6 md:gap-x-10 mb-2 sm:mb-3 md:mb-5 lg:mb-6 md:w-[90%] lg:w-[66%]">
                <div>
                  <Input
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    id="fname"
                    placeholder="First Name"
                    label="First Name"
                  />
                  <InputError
                    error={formik.errors.firstName}
                    touched={formik.touched.firstName}
                  />
                </div>
                <div>
                  <Input
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    id="lname"
                    placeholder="Last Name"
                    label="Last Name"
                  />
                  <InputError
                    error={formik.errors.lastName}
                    touched={formik.touched.lastName}
                  />
                </div>
              </div>
              <div className="mb-2 sm:mb-3 md:mb-5 lg:mb-6 sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <div>
                  <Input
                    name="email"
                    type="email"
                    onChange={""}
                    value={""}
                    id="email"
                    placeholder="company@domain.com"
                    label="Email Address"
                  />
                  <InputError
                    error={formik.errors.email}
                    touched={formik.touched.email}
                  />
                </div>
                <div>
                  <Input
                    name="telephone"
                    type="text"
                    onChange={""}
                    value={""}
                    id="telephone"
                    placeholder="Your phone number"
                    label="Telephone"
                  />
                  <InputError
                    error={formik.errors.telephone}
                    touched={formik.touched.telephone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 border-b border-[#F0F0F0] pb-5 sm:pb-6 md:pb-8 lg:pb-10">
            <FormHeading title="New Customer" />
            <div className="">
              <div className="mb-2 sm:mb-3 md:mb-5 lg:mb-6 sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <div>
                  <Input
                    name="addressOne"
                    type="text"
                    onChange={""}
                    value={""}
                    id="addressOne"
                    placeholder="4279 Zboncak Port Suite 6212"
                    label="Address 1"
                  />
                  <InputError
                    error={formik.errors.addressOne}
                    touched={formik.touched.addressOne}
                  />
                </div>
                <div>
                  <Input
                    name="addressTwo"
                    type="text"
                    onChange={""}
                    value={""}
                    id="addressTwo"
                    placeholder="4279 Zboncak Port Suite 6212"
                    label="Address 2"
                  />
                  <InputError
                    error={formik.errors.addressTwo}
                    touched={formik.touched.addressTwo}
                  />
                </div>
              </div>
              <div className="mb-2 sm:mb-3 md:mb-5 lg:mb-6 grid grid-cols-2 gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <div>
                  <Input
                    name="city"
                    type="text"
                    onChange={""}
                    value={""}
                    id="city"
                    placeholder="city"
                    label="City"
                  />
                  <InputError
                    error={formik.errors.city}
                    touched={formik.touched.city}
                  />
                </div>
                <div>
                  <Input
                    name="postCode"
                    type="text"
                    onChange={""}
                    value={""}
                    id="postcode"
                    placeholder="0908"
                    label="Post Code"
                  />
                  <InputError
                    error={formik.errors.postCode}
                    touched={formik.touched.postCode}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <div>
                  <label className="text-black font-primaryFont font-bold text-base">
                    Division
                  </label>
                  <select
                    name="division"
                    onChange={formik.handleChange}
                    value={formik.values.division}
                    className="block w-full focus:outline-none mt-1 md:mt-2 lg:mt-3 border-b border-[#F0F0F0] pb-2 font-primaryFont font-normal text-sm text-gray"
                  >
                    <option selected>Please select</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <InputError
                    error={formik.errors.division}
                    touched={formik.touched.division}
                  />
                </div>
                <div>
                  <label className="text-black font-primaryFont font-bold text-base">
                    District
                  </label>
                  <select
                    name="district"
                    onChange={formik.handleChange}
                    value={formik.values.district}
                    className=" block w-full focus:outline-none mt-1 md:mt-2 lg:mt-3 border-b border-[#F0F0F0] pb-2 font-primaryFont font-normal text-sm text-gray"
                  >
                    <option selected>Please select</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <InputError
                    error={formik.errors.district}
                    touched={formik.touched.district}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 md:border-b border-[#F0F0F0] pb-1 md:pb-8 lg:pb-10">
            <FormHeading title="Your Password" />
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
              <div>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  id="password"
                  placeholder="Password"
                  label="Password"
                />
                <InputError
                  error={formik.errors.password}
                  touched={formik.touched.password}
                />
              </div>
              <div>
                <Input
                  name="repeatPassword"
                  type="text"
                  onChange={formik.handleChange}
                  value={""}
                  id="RepeatPassword"
                  placeholder="Repeat Password"
                  label="Repeat Password"
                />
                <InputError
                  error={formik.errors.repeatPassword}
                  touched={formik.touched.repeatPassword}
                />
              </div>
            </div>
          </div>
          <div className="agreement mt-4 sm:mt-6 md:mt-8 lg:mt-10 ">
            <div className="flex gap-x-3 ">
              <Input
                name="agree"
                type="checkbox"
                onChange={""}
                value={""}
                id="checked"
              />
              <p className="font-primaryFont font-normal text-gray text-sm md:mt-1 lg:mt-2">
                I have read and agree to the Privacy Policy
              </p>
            </div>
            <div className="flex gap-x-3 lg-mt-3">
              <p className="font-primaryFont font-normal text-gray text-sm md:mt-1 lg:mt-2">
                Subscribe Newsletter
              </p>
              <Input
                name="agree"
                type="checkbox"
                onChange={""}
                value={""}
                id="checked"
              />
              <p className="font-primaryFont font-normal text-gray text-sm md:mt-1 lg:mt-2">
                Yes
              </p>
              <Input
                name="agree"
                type="checkbox"
                onChange={""}
                value={""}
                id="checked"
              />
              <p className="font-primaryFont font-normal text-gray text-sm md:mt-1 lg:mt-2">
                No
              </p>
            </div>
          </div>
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
