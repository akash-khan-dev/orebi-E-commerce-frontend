import React from "react";

const InputError = ({ error, touched }) => {
  return (
    <>
      {error && touched ? (
        <p className="text-red-400 font-primaryFont text-base ">{error}</p>
      ) : null}
    </>
  );
};

export default InputError;
