import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children && children}
      <Footer />
    </>
  );
};

export default Layout;
