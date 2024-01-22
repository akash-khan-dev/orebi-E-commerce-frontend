import React from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";
import Button from "../../common/Button";

const SignUpForm = () => {
  return (
    <>
      <div className="form">
        <form>
          <div className="border-b border-[#F0F0F0] pb-5 sm:pb-6 md:pb-8 lg:pb-10">
            <FormHeading title="Your Personal Details" />
            <div className="">
              <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <Input
                  name="FirstName"
                  type="text"
                  onChange={""}
                  value={""}
                  id="fname"
                  placeholder="First Name"
                  label="First Name"
                />
                <Input
                  name="LastName"
                  type="text"
                  onChange={""}
                  value={""}
                  id="lname"
                  placeholder="Last Name"
                  label="Last Name"
                />
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <Input
                  name="email"
                  type="email"
                  onChange={""}
                  value={""}
                  id="email"
                  placeholder="company@domain.com"
                  label="Email Address"
                />
                <Input
                  name="telephone"
                  type="text"
                  onChange={""}
                  value={""}
                  id="telephone"
                  placeholder="Your phone number"
                  label="Telephone"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 border-b border-[#F0F0F0] pb-5 sm:pb-6 md:pb-8 lg:pb-10">
            <FormHeading title="New Customer" />
            <div className="">
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <Input
                  name="addressOne"
                  type="text"
                  onChange={""}
                  value={""}
                  id="addressOne"
                  placeholder="4279 Zboncak Port Suite 6212"
                  label="Address 1"
                />
                <Input
                  name="addressTwo"
                  type="text"
                  onChange={""}
                  value={""}
                  id="addressTwo"
                  placeholder="4279 Zboncak Port Suite 6212"
                  label="Address 2"
                />
              </div>
              <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <Input
                  name="city"
                  type="text"
                  onChange={""}
                  value={""}
                  id="city"
                  placeholder="city"
                  label="City"
                />
                <Input
                  name="postCode"
                  type="text"
                  onChange={""}
                  value={""}
                  id="postcode"
                  placeholder="0908"
                  label="Post Code"
                />
              </div>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
                <div>
                  <label className="text-black font-primaryFont font-bold text-base">
                    Division
                  </label>
                  <select className="block w-full focus:outline-none mt-1 md:mt-2 lg:mt-3 border-b border-[#F0F0F0] pb-2 font-primaryFont font-normal text-sm text-gray">
                    <option selected>Please select</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label className="text-black font-primaryFont font-bold text-base">
                    District
                  </label>
                  <select className=" block w-full focus:outline-none mt-1 md:mt-2 lg:mt-3 border-b border-[#F0F0F0] pb-2 font-primaryFont font-normal text-sm text-gray">
                    <option selected>Please select</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 md:border-b border-[#F0F0F0] pb-1 md:pb-8 lg:pb-10">
            <FormHeading title="Your Password" />
            <div className="sm:grid sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 md:w-[90%] lg:w-[66%]">
              <Input
                name="password"
                type="password"
                onChange={""}
                value={""}
                id="password"
                placeholder="Password"
                label="Password"
              />
              <Input
                name="repeatPassword"
                type="text"
                onChange={""}
                value={""}
                id="RepeatPassword"
                placeholder="Repeat Password"
                label="Repeat Password"
              />
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
          <Button text="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
