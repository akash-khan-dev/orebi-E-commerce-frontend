import React from "react";

const Button = ({ text }) => {
  return (
    <div className="button mt-7">
      <button
        type="button"
        className="font-primaryFont font-bold text-sm w-44 h-10  text-[#2b2b2b] overflow-hidden shadow-lg border-[#2b2b2b] before:block before:absolute before:translate-x-[90%] before:inset-0 before:bg-[#2b2b2b] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-[90%] after:inset-0  after:bg-[#2b2b2b] relative inline-block hover:text-white"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
