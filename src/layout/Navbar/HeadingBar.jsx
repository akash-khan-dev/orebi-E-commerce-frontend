import React from "react";
import SearchInput from "../../components/navbar/SearchInput";
import CategoryMenu from "../../components/navbar/CategoryMenu";
import Account from "../../components/navbar/Account";
const HeadingBar = () => {
  return (
    <>
      <section className="search-bar py-[25px] bg-[#F5F5F3]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-1/5">
              <CategoryMenu />
            </div>
            <div className="w-3/6">
              <SearchInput />
            </div>
            <div className="w-1/4">
              <Account />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadingBar;
