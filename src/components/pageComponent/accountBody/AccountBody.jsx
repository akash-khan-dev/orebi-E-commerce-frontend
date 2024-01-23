import React, { useState } from "react";
import Lists from "../../../components/common/Lists";
import ListItems from "../../../components/common/ListItems";
import { AccountSidebar } from "../../../Data/AccountSidebar";
import Dashboard from "./Dashboard";
import Others from "./Others";

const AccountBody = () => {
  const [active, setActive] = useState(1);
  const [outlet, setOutlet] = useState(<Dashboard />);
  const handleActive = (id, title) => {
    setActive(id);
    if (title === "Dashboard") {
      setOutlet(<Dashboard />);
    } else if (title === "Others") {
      setOutlet(<Others />);
    }
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-x-8 ">
        <div className="account-sidebar">
          <Lists>
            {AccountSidebar.map((item, i) => (
              <div
                key={i}
                onClick={() => handleActive(item.id, item.title)}
                style={{
                  background: active === item.id ? "#f0f0f0" : "",
                  color: active === item.id ? "#262626" : "",
                }}
              >
                <ListItems
                  className={` border-b border-[#f0f0f0] block py-2 my-1 font-primaryFont font-normal text-base text-gray cursor-pointer hover:bg-[#f0f0f0] pl-2 hover:transition hover:ease-in-out hover:duration-300 hover:text-black background`}
                >
                  <style></style>
                  {item.title}
                </ListItems>
              </div>
            ))}
          </Lists>
        </div>
        <div className="div h-3 col-span-3 ">{outlet}</div>
      </div>
    </>
  );
};

export default AccountBody;
