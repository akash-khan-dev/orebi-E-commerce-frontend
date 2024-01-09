import React from "react";
import { helpData, shopData } from "./footerData";
import Lists from "../../components/common/Lists";
import ListItem from "../../components/common/ListItems";
import { menuData } from "../../Data/MenuData";
import { Logo } from "../../SVG/Logo";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="footer py-10 bg-[#F5F5F3]">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className="w-[33%] md:w-[15%]">
              <div>
                <h3 className="font-primaryFont font-bold text-base text-black mb-3">
                  MENU
                </h3>
              </div>
              <Lists>
                {menuData.map((item, i) => (
                  <ListItem
                    link={item.link}
                    key={i}
                    className="sm:hover:ml-2 ease-in duration-300 hover:text-black hover:font-semibold  font-primaryFont text-sm font-normal text-[#6D6D6D] block mb-[6px]"
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
            <div className="w-[33%] md:w-[15%]">
              <div>
                <h3 className="font-primaryFont font-bold text-base text-black mb-3">
                  SHOP
                </h3>
              </div>
              <Lists>
                {shopData.map((item, i) => (
                  <ListItem
                    link={item.link}
                    key={i}
                    className="sm:hover:ml-2 ease-in duration-300 hover:text-black hover:font-semibold  font-primaryFont text-sm font-normal text-[#6D6D6D] block mb-[6px]"
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
            <div className=" w-[33%] md:w-[20%]">
              <div>
                <h3 className="font-primaryFont font-bold text-base text-black mb-3">
                  HELP
                </h3>
              </div>
              <Lists>
                {helpData.map((item, i) => (
                  <ListItem
                    link={item.link}
                    key={i}
                    className="sm:hover:ml-2 ease-in duration-300 hover:text-black hover:font-semibold  font-primaryFont text-sm font-normal text-[#6D6D6D] block mb-[6px]"
                  >
                    {item.title}
                  </ListItem>
                ))}
              </Lists>
            </div>
            <div className="mt-8 md:mt-0 md:w-[25%]">
              <div>
                <h3 className="font-primaryFont font-bold text-base text-black mb-3">
                  (052) 611-5711 <br /> company@domain.com
                </h3>
              </div>
              <p className="font-primaryFont text-sm font-normal text-[#6D6D6D] block mb-[6px]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div className="mt-8 md:mt-0 w-[25%]">
              <a href="/">
                <Logo />
              </a>
            </div>
          </div>
          <div className="CopyRight pt-6">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-3">
                <div className="hover:-mt-1 transition-all ease-in-out duration-300 w-8 h-8 bg-white rounded-full flex items-center justify-center drop-shadow-lg">
                  <a href="/">
                    <BiLogoFacebook size={22} />
                  </a>
                </div>
                <div className="hover:-mt-1 transition-all ease-in-out duration-300 w-8 h-8 bg-white rounded-full flex items-center justify-center drop-shadow-lg">
                  <a href="/">
                    <BiLogoLinkedin />
                  </a>
                </div>
                <div className="hover:-mt-1 transition-all ease-in-out duration-300 w-8 h-8 bg-white rounded-full flex items-center justify-center drop-shadow-lg">
                  <a href="/">
                    <BsInstagram />
                  </a>
                </div>
              </div>
              <div className="                       ">
                <p className="font-primaryFont font-normal text-sm text-[#6D6D6D]                          ">
                  {date} Orebi Minimal eCommerce Figma Template by Adveits
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
