import React, { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import Pagination from "../../components/pageComponent/shop/Pagination";

import { IoFilterCircleOutline } from "react-icons/io5";
import SelectCategoryInput from "../../components/pageComponent/shop/SelectCategoryInput";
import ShowProductInput from "../../components/pageComponent/shop/ShowProductInput";

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
  return (
    <>
      <section className="shop pb-24">
        <div className="container">
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
          <div className="flex gap-10">
            <div className="sidebarMenu w-[25%] h-7 bg-gray"></div>
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
