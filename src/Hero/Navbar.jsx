import React from "react";
import NavLink from "./NavLink";
import itsahackLogo from "./../logo.svg";

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between p-6 items-center relative">
      <img src="./itsa-logo.png" alt="" className="w-12 h-12 hidden md:block" />
      <div className="flex gap-x-6 gap-y-3 font grow justify-center flex-wrap">
        <NavLink href={"#about"} title={"ABOUT"} />
        <NavLink href={"#"} title={"TIMELINE"} />
        <NavLink href={"#"} title={"DOMAIN"} />
        <NavLink href={"#"} title={"PRIZES"} />
        <NavLink href={"#"} title={"SPONSORS"} />
        <NavLink href={"#"} title={"JUDGES"} />
        <NavLink href={"#"} title={"TEAM"} />
        <NavLink href={"#"} title={"FAQ"} />
      </div>
      <img className="w-12 h-12 hidden md:block opacity-0" src={itsahackLogo} alt="itsahack logo"/>
      <img className="w-12 h-12 hidden md:block absolute right-5 " src={itsahackLogo} alt="itsahack logo"/>
    </nav>
  );
};

export default Navbar;
