import React, { useState } from "react";
import FormHeading from "../../common/FormHeading";
import Input from "../../common/Input";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import Button from "../../common/Button";
import InputError from "../../common/InputError";
import { signIn } from "../../../validation/validation";
import { useFormik } from "formik";
const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signIn,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div>
        <div className="Login_heading">
          <FormHeading title="Returning Customer" />
        </div>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <div className=" sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 md:gap-10">
              <div>
                <Input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="company@domain.com"
                  label="Email Address"
                  id="email"
                />
                <InputError
                  error={formik.errors.email}
                  touched={formik.touched.email}
                />
              </div>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  name="password"
                  onChange=""
                  value={formik.values.password}
                  placeholder="password"
                  label="Password"
                  id="password"
                />
                <InputError
                  error={formik.errors.password}
                  touched={formik.touched.password}
                />

                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-[60%]  right-5 md:right-7 lg:right-8 cursor-pointer"
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
