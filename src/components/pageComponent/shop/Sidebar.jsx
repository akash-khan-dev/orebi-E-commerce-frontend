import React from "react";
import SidebarItem from "./SidebarItem";
import {
  category,
  colors,
  brands,
  prices,
} from "../../../Data/ProductSidebarData";
import { IoClose } from "react-icons/io5";
const Sidebar = ({ setShowMenu }) => {
  return (
    <>
      <div className="flex justify-end sm:hidden">
        <div className="mb-3 w-6 h-6 rounded-full bg-white flex items-center justify-center">
          <IoClose size={20} onClick={() => setShowMenu(false)} />
        </div>
      </div>
      <SidebarItem title="Shop by Category" dropdown={false} data={category} />
      <SidebarItem title="Shop by Color" dropdown={true} data={colors} />
      <SidebarItem title="Shop by Brand" dropdown={true} data={brands} />
      <SidebarItem title="Shop by Price" dropdown={false} data={prices} />
    </>
  );
};

export default Sidebar;
