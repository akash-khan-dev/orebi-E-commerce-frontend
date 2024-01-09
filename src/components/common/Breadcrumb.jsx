import React from "react";
import { VscTriangleLeft } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Breadcrumb = () => {
  const location = useLocation();
  const params =
    location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
  return (
    <>
      <section className="breadcrumb py-20">
        <div className="breadcrumb-title">
          <h2 className="font-primaryFont font-bold text-4xl md:text-5xl text-black ">
            {params}
          </h2>
        </div>
        <div className="breadcrumb mt-1 flex">
          <p className="font-primaryFont font-normal text-xs text-gray">
            <Link to="/">Home</Link>{" "}
            <VscTriangleLeft className="inline-block" /> {params}
          </p>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
