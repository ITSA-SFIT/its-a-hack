import React from "react";
import itsahackTitle from "./../title.svg";
import Address from "./Address";
import Links from "./Links";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="Footer bg-black text-white p-4 py-10">
      <div className="flex gap-x-10 gap-y-4 sm:justify-around flex-wrap">
        <div className="flex flex-col justify-center items-center md:w-[20%] w-full">
          <img src={itsahackTitle} className="max-w-64" alt="" />
        </div>
        <Address />
        <Links />
        <Contact />
      </div>
      <div className="mt-4">
        <p className="text-center mt-2 text-sm font-medium text-gray-200">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://itsa.sfit.ac.in" target="_blank" rel="noreferrer" className="underline">
            ITSA
          </a>{" "}
          x ITS-A-Hack. All Rights Reserved.
        </p>
        <p className="text-center text-sm font-medium text-gray-200">
          Made with ❤ and {"</>"} by{" "}
          <a
            href="https://ajaykumarn3000.github.io/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Ajaykumar Nadar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
