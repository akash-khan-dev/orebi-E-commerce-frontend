import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../../SVG/Logo";
import { HiBars3 } from "react-icons/hi2";
import Lists from "../../components/common/Lists";
import ListItems from "../../components/common/ListItems";
import { menuData } from "../../Data/MenuData";
import { useClickOutSite } from "../../Hook/useClickOutSite";
import HeadingBar from "./HeadingBar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    });
  });
  const nav_ref = useRef();
  useClickOutSite(nav_ref, () => {
    setShowMenu(false);
  });
  return (
    <>
      <nav>
        <div className="container py-8 ">
          <div className="flex items-center justify-between relative">
            <div className="w-1/3">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="w-[67%]">
              <div className=" md:block hidden ">
                <Lists className="md:flex md:justify-end absolute top-4 md:top-0 right-0 md:bg-transparent md:py-0 md:px-0 py-3 px-7 z-30">
                  {menuData?.map((item, index) => (
                    <ListItems
                      key={index}
                      link={item.link}
                      liStyle="md:mx-4 lg:mx-5"
                      className="hover:text-black hover:font-bold hover:transition-all hover:ease-in-out duration-300 relative after:absolute after:content[''] after:w-[0px] after:h-[3px] after:bg-black after:bottom-[-5px] after:left-0 before:absolute before:content[''] before:w-[0px] before:h-[3px] before:bg-black before:bottom-[-12px] before:left-0 hover:before:w-[20px] hover:after:w-[40px] after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
                    >
                      {item.title}
                    </ListItems>
                  ))}
                </Lists>
              </div>
              <div className="bar">
                <HiBars3
                  size={22}
                  onClick={() => setShowMenu(true)}
                  className="md:hidden block cursor-pointer  absolute top-0 right-0"
                />
              </div>
              <div ref={nav_ref} className="md:hidden">
                {showMenu && (
                  <Lists className=" absolute top-5 right-0 bg-[#959595] z-30">
                    {menuData?.map((item, index) => (
                      <ListItems
                        link={item.link}
                        key={index}
                        className="font-primaryFont block py-2 px-12 text-white font-semibold text-sm hover:bg-white transition duration-300 ease-in-out hover:text-black"
                      >
                        {item.title}
                      </ListItems>
                    ))}
                  </Lists>
                )}
              </div>
            </div>
          </div>
        </div>
        <HeadingBar />
      </nav>
    </>
  );
};

export default Navbar;
