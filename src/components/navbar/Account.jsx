import React, { useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

import { MdLocalGroceryStore } from "react-icons/md";
import { AccountData } from "../../Data/MenuData";
import { useClickOutSite } from "../../Hook/useClickOutSite";
import Lists from "../common/Lists";
import ListItem from "../common/ListItems";
import Card from "./Card";

const Account = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const openAccountMenu = useRef(null);
  const openCard = useRef(null);
  useClickOutSite(openAccountMenu, () => {
    setShowAccountMenu(false);
  });
  useClickOutSite(openCard, () => {
    setShowCard(false);
  });
  return (
    <>
      <div className="flex justify-end">
        <div className="w-[60px] flex cursor-pointer relative">
          <FaUserAlt onClick={() => setShowAccountMenu(true)} />
          <GoTriangleDown onClick={() => setShowAccountMenu(true)} />
          {showAccountMenu && (
            <div
              ref={openAccountMenu}
              className=" z-[999] w-52 bg-white rounded-md shadow-[0px_20px_60px_0px_rgba(40,_40,_40,_0.15)] absolute top-[150%] left-[-170%]"
            >
              {AccountData.map((data, i) => (
                <div
                  className="border-b text-center border-white-100 ease-in-out duration-300 group hover:bg-black last:border-none"
                  key={i}
                >
                  <Lists className="py-2  w-52 ">
                    <ListItem
                      className={
                        "text-sm font-normal group:font-bold group-hover:text-white font-primaryFont ease-in-out duration-300 text-[#262626] "
                      }
                      link={data.link}
                    >
                      {data.title}
                    </ListItem>
                  </Lists>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-[30px] self-end ">
          <MdLocalGroceryStore
            onClick={() => setShowCard(true)}
            className=" text-[20px] lg:text-[25px]"
          />
          <div className="w-[55px] flex relative">
            {showCard && <Card openCard={openCard} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
