import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const SidebarSubContent = ({ dropdown, title, children, color }) => {
  const [showDropdown, setShowDropdown] = useState(dropdown);
  return (
    <>
      <div>
        {dropdown ? (
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-between cursor-pointer border-b border-[#D8D8D8] py-5"
          >
            <h5 className="font-primaryFont font-normal text-base text-gray">
              {title}
            </h5>
            {showDropdown ? (
              <TiPlus color="#767676" />
            ) : (
              <RxCross2 color="#767676" />
            )}
          </div>
        ) : (
          <div className=" border-b border-[#D8D8D8] py-5 flex gap-1 items-center">
            <h5 className="font-primaryFont font-normal text-base text-gray">
              {color && (
                <span
                  className={`w-[11px] h-[11px] inline-block rounded-full mr-1`}
                  style={{ backgroundColor: `${color}` }}
                ></span>
              )}
              {title}
            </h5>
          </div>
        )}
        {!showDropdown && <div>{children}</div>}
      </div>
    </>
  );
};

export default SidebarSubContent;
