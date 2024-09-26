import React from "react";
import NavLink from "./NavLink";
import itsahackLogo from "./../logo.svg";

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between p-6 items-center relative">
      <a href="https://itsa.sfit.ac.in" target="_blank" rel="noreferrer">
        <img
          src="./itsa-logo.png"
          alt=""
          className="w-12 h-12 hidden md:block"
        />
      </a>
      <div className="flex gap-x-6 gap-y-3 font grow justify-center flex-wrap">
        <NavLink href={"#about"} title={"ABOUT"} />
        <NavLink href={"#timeline"} title={"TIMELINE"} />
        <NavLink href={"#domain"} title={"DOMAIN"} />
        <NavLink href={"#prizes"} title={"PRIZES"} />
        <NavLink href={"#partners"} title={"PARTNERS"} />
        <NavLink href={"#vip"} title={"VIP"} />
        <NavLink href={"#ProblemStatement"} title={"PROBLEM STATEMENT"} />
        {/* <NavLink href={"#"} title={"TEAM"} /> */}
      <NavLink href={"#faq"} title={"FAQ"} />
      </div>
      <img
        className="w-12 h-12 hidden md:block opacity-0"
        src={itsahackLogo}
        alt="itsahack logo"
      />
      <img
        className="w-12 h-12 hidden md:block absolute right-5 "
        src={itsahackLogo}
        alt="itsahack logo"
      />
    </nav>
  );
};

export default Navbar;
