import React, { useState, useRef } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useClickOutSite } from "../../Hook/useClickOutSite";
import { CategoryData } from "../../Data/MenuData";
import Lists from "../../components/common/Lists";
import ListItems from "../../components/common/ListItems";
const CategoryMenu = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const clickOutMenu = useRef(null);
  useClickOutSite(clickOutMenu, () => {
    setShowCategoryMenu(false);
  });
  return (
    <>
      <div className="cursor-pointer relative">
        <div onClick={() => setShowCategoryMenu(true)}>
          <div className="flex items-center gap-2">
            <HiOutlineBars3BottomLeft />
            <span className="font-primaryFont text-sm text-black hidden md:block">
              Shop by Category
            </span>
          </div>
        </div>
        {showCategoryMenu && (
          <div
            ref={clickOutMenu}
            className="z-[999] w-[200%] lg:w-[80%] py-[10px] bg-black rounded-md shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[150%] left-0"
          >
            {CategoryData.map((item, i) => (
              <div
                className=" border-b group border-[#2D2D2D] last:border-none"
                key={i}
              >
                <Lists className="pl-5 py-1">
                  <ListItems
                    className={
                      "text-sm font-normal group-hover:ml-3 group-hover:font-bold font-primaryFont ease-in-out duration-300 text-slate-400 group-hover:text-white"
                    }
                    link={item.link}
                  >
                    {item.title}
                  </ListItems>
                </Lists>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryMenu;
