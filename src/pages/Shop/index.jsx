import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Pagination from "../../components/pageComponent/shop/Pagination";

import { IoFilterCircleOutline } from "react-icons/io5";
import SelectCategoryInput from "../../components/pageComponent/shop/SelectCategoryInput";
import ShowProductInput from "../../components/pageComponent/shop/ShowProductInput";
import Sidebar from "../../components/pageComponent/shop/Sidebar";

import { useClickOutSite } from "../../Hook/useClickOutSite";
const Shop = () => {
  const [showProduct, setShowProduct] = useState(12);
  const [showMenu, setShowMenu] = useState(false);

  const categoryOptions = [
    { category: "Featured", value: "US" },
    { category: "Germany", value: "DE" },
    { category: "France", value: "FR" },
    { category: " Canada", value: "CN" },
    { category: " United States", value: "US" },
  ];
  const showProductNumber = [
    {
      productNumber: 12,
      value: 12,
    },
    {
      productNumber: 24,
      value: 24,
    },
    {
      productNumber: 36,
      value: 36,
    },
    {
      productNumber: 48,
      value: 48,
    },
  ];
  useEffect(() => {
    const scrollWidth = () => {
      // console.log(window.innerWidth);
      if (window.innerWidth < 992) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
      scrollWidth();
    };

    window.addEventListener("resize", scrollWidth);
  });
  const nav_ref = useRef();
  useClickOutSite(nav_ref, () => {
    setShowMenu(false);
  });
  return (
    <>
      <section className="shop pb-10 sm:pb-15 md:pb-20 lg:pb-24">
        <div className="container">
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
          <div className="flex gap-8 relative">
            {showMenu && (
              <div
                ref={nav_ref}
                className="sm:hidden p-5  sm:p-0 w-full absolute top-12 left-0 z-50 bg-[#f4f4f4] sm:bg-transparent sm:sticky"
              >
                <Sidebar setShowMenu={setShowMenu} />
              </div>
            )}
            <div className="hidden sm:block sm:w-[70%] md:w-[25%]  p-5  sm:p-0 w-full absolute top-12 left-0 z-50 bg-[#f4f4f4] sm:bg-transparent sm:sticky">
              <Sidebar />
            </div>
            <div className="Product_bar w-full md:w-[75%]">
              <div className="mb-4 flex gap-x-5 md:gap-x-10">
                <div className="flex items-center sm:hidden">
                  <IoFilterCircleOutline
                    onClick={() => setShowMenu(true)}
                    size={30}
                    color="gray"
                  />
                </div>
                <div>
                  <SelectCategoryInput
                    sortby="Short by"
                    option={categoryOptions}
                  />
                </div>
                <div>
                  <ShowProductInput
                    show="Show"
                    option={showProductNumber}
                    setShowProduct={setShowProduct}
                  />
                </div>
              </div>
              <Pagination itemsPerPage={showProduct} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
