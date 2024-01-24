import React, { useState } from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import Button from "../../common/Button";
const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <>
      <div>
        <div className="Login_heading">
          <FormHeading title="Returning Customer" />
        </div>
        <div className="form">
          <form>
            <div className=" sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 md:gap-10">
              <Input
                type="email"
                name="email"
                onChange=""
                value=""
                placeholder="company@domain.com"
                label="Email Address"
                id="email"
              />
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  onChange=""
                  // value=""
                  placeholder="password"
                  label="Password"
                  id="password"
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-2/4 -translate-y-1/4 right-5 md:right-7 lg:right-8 cursor-pointer"
                >
                  {showPass ? <IoEye /> : <IoEyeOffOutline />}
                </div>
              </div>
            </div>
            <Button text={"Log in"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
