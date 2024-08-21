import React from "react";
import NavLink from "./NavLink";
import itsahackLogo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between p-6 items-center">
      <img src="./itsa-logo.png" alt="" className="w-12 h-12 hidden md:block" />
      <div className="flex gap-x-6 gap-y-3 font grow justify-center flex-wrap">
        <NavLink href={"#"} title={"ABOUT"} />
        <NavLink href={"#"} title={"TIMELINE"} />
        <NavLink href={"#"} title={"TRACKS"} />
        <NavLink href={"#"} title={"PRIZES"} />
        <NavLink href={"#"} title={"SPONSORS"} />
        <NavLink href={"#"} title={"JUDGES"} />
        <NavLink href={"#"} title={"TEAM"} />
        <NavLink href={"#"} title={"FAQ"} />
        <NavLink href={"#"} title={"CONTACT US"} />
      </div>
      <img className="w-12 h-12 hidden md:block" src={itsahackLogo} alt="itsahack logo"/>
    </nav>
  );
};

export default Navbar;
