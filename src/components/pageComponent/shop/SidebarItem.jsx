import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import SidebarSubContent from "./SidebarSubContent";

const SidebarItem = ({ title, dropdown, data }) => {
  const [show, setShow] = useState(dropdown);
  return (
    <>
      <div className="mb-12">
        {dropdown ? (
          <div className="sidebar-item">
            <div
              onClick={() => setShow(!show)}
              className="item-heading flex items-center justify-between cursor-pointer"
            >
              <h4 className="font-primaryFont font-bold text-xl text-black">
                {title}
              </h4>
              {show ? <GoTriangleDown /> : <GoTriangleUp />}
            </div>
          </div>
        ) : (
          <div className="sidebar-item mb-2">
            <div className="item-heading">
              <h4 className="font-primaryFont font-bold text-xl text-black cursor-pointer">
                {title}
              </h4>
            </div>
          </div>
        )}
        {show && (
          <div className="item-category">
            {data.map((item) => (
              <SidebarSubContent
                dropdown={false}
                title={item.name ? item.name : item.brandName}
                color={item.code}
              />
            ))}
          </div>
        )}
        {!dropdown &&
          data.map((item, i) => (
            <SidebarSubContent
              dropdown={item.subCName ? true : false}
              title={item.Cname ? item.Cname : item.range}
            >
              {item.subCName &&
                item.subCName.map((subCategory) => (
                  <p className="mx-2 font-primaryFont font-normal text-base text-gray py-2  border-[#D8D8D8]">
                    {subCategory.name}
                  </p>
                ))}
            </SidebarSubContent>
          ))}
      </div>
    </>
  );
};

export default SidebarItem;
