import React from "react";
import itsahackTitle from "./../title.svg";
import Address from "./Address";
import Links from "./Links";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="Footer bg-black text-white flex p-4 py-10 gap-x-10 gap-y-4 sm:justify-around flex-wrap">
      <div className="flex flex-col justify-center items-center md:w-[20%] w-full">
        {/* <img src={itsahackLogo} alt="" /> */}
        <img src={itsahackTitle} className="max-w-64" alt="" />
      </div>
      <Address />
      <Links />
      <Contact />
      <p className="text-center mt-2 text-sm font-medium text-gray-200">
        &copy; {new Date().getFullYear()} ITSA x ITS-A-Hack. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
